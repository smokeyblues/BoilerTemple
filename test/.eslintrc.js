module.exports = {
    "plugins": ["mocha"],
    "env": {
        "mocha": true
    },
    "rules": {
        "no-unused-vars": [
            "error",
            { "varsIgnorePattern": "should|expect" },
        ],
        "mocha/no-exclusive-tests": "error"
    }
};