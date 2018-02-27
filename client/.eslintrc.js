module.exports = {
    "parserOptions": {
        "sourceType": "script"
    },
    "env": {
        "browser": true,
        "jquery": true,
        "node": false
    },
    "extends": ["angular", "eslint:recommended", "google"],
    "rules": {
        "no-var": "off",
        "prefer-const": "off",
        "no-tabs": "off"
    }
};