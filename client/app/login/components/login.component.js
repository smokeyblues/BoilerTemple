/**
 * @memberOf angular_module.BolerTemple-site.login
 * @description provides the view template and functionality for 'login' state
 * @type {{bindings: {}, controller: loginComponent.controller, template: string}}
 */
const loginComponent = {
	bindings: {},
	controller: function($state, $log, authService, errorService) {
		let ctrl = this;

		// DECLARE CONTROLLER VARIABLES
		ctrl.greeting = 'hello world';
		ctrl.registerObj = null;

		// DECLARE PUBLIC FUNCTIONS
		ctrl.register = register;

		// LIFECYCLE FUNCTIONS
		ctrl.$onInit = function() {
		};
		ctrl.$postLink = function() {
		};
		ctrl.$onChange = function() {
		};
		ctrl.$onDestroy = function() {
		};

		// FUNCTIONS
        /**
		 * @function register
		 * @description Takes password input from user,
		 * checks if it equals confirm password,
		 * and passes inputted password to authService to register new user.
		 * */
		function register() {
			if (ctrl.registerPassword !== ctrl.confirmPassword) {
				$log.log('nope');
			} else {
				authService
					.register(ctrl.registerObj)
					.then(navHome)
					.catch(showError);
			}
		}

        /**
		 * @function navHome
		 * @description changes state to 'home' or '/' route once authService
		 * has completed registration and returns response object to register
		 * function.
         * @param {object} res
         */
		function navHome(res) {
			if (res) {
				$state.go('home');
			}
		}

        /**
		 * @function showError
		 * @description passes err object to errorService
         * @param {object} err
         */
		function showError(err) {
			$log.log('login Error', err);
			errorService.loginError(err);
		}
	},
	template: `<div class='login-background'>

    <form class="login-modal" ng-hide='auth.create'>
        <a href="#!/"><h1 class='cursor pull-right'>X</h1></a>
        <h1 class='form-title'>Login</h1>
        <div class="form-group">

            <div class="form-group">
                <label for="Email">Email address</label>
                <input 
                type="email" 
                class="form-control" 
                id="Email" 
                placeholder="Email" 
                ng-model='auth.email'>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input 
                type='password' 
                class="form-control" 
                id="password" 
                placeholder="Password" 
                ng-model='auth.password'>
            </div>

            <!-- <div class="form-group"> -->
            <button 
            type="submit" 
            class="btn btn-default" 
            ng-click='auth.login()'>Submit</button>
            <h3>{{auth.loginError}}</h3>
        </div>
        <h4 
        ng-click='auth.create =! auth.create' 
        class='exitCursor signup'
        >Create Account</h4>
    </form>


    <!-- User Sign Up -->

    <form class="login-modal" ng-show='auth.create'>
        <a href="#!/"><h1 class='cursor pull-right'>X</h1></a>
        <h1 class='form-title'>Register</h1>
        <div class="form-group">

            <div class="form-group">
                <label for="Name">First Name?</label>
                <input 
                type="text" 
                placeholder="First Name" 
                ng-model='auth.firstName' 
                class="form-control" 
                required>
            </div>

            <div class="form-group">
                <label for="Email">Email address</label>
                <input 
                ng-class='{red: auth.emailField === true}' 
                type="email" 
                class="form-control" 
                placeholder="Email"
                ng-model='auth.registerEmail' 
                required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input 
                ng-class='{red: auth.noPassMatch === true}' 
                type='password' class="form-control"
                placeholder="Password" 
                ng-model='auth.registerPassword' 
                required>
            </div>

            <div class="form-group">
                <label for="password">Confirm Password</label>
                <input 
                ng-class='{red: auth.noPassMatch === true}' 
                type='password' class="form-control"
                placeholder="Confirm Password" 
                ng-model='auth.confirmPassword' 
                required>
            </div>

            <button 
            type="submit" 
            class="btn btn-default" 
            ng-click='auth.register()'
            >Submit</button>
            <h3>{{auth.tryAgain}}</h3>
        </div>
    </form>
</div>
`,
};

angular.module('BoilerTemple-site.login')
	.component('loginComponent', loginComponent);

loginComponent.$inject = ['$state', 'authService', 'errorService'];
