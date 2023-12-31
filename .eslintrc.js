module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "2020",
        "sourceType": "module"
    },
    "rules": {
    }
}
