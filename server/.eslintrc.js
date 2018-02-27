module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "google"],
    "rules": {
        "no-console": "off",
        "comma-dangle": "off",
        "no-multi-spaces": "off",
        "no-tabs": "off",
        "one-var": "off",
        "new-cap": [1, {newIsCap: true, capIsNew: false}],
    }
};