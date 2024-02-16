module.exports = {
    
        "env": {
            "es2021": true,
            "node": true,
            "jest": true
        },
        "extends": [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "airbnb-base",
            "pluging:prettier/recommended",
            "pluging:import/errors",
            "pluging:import/warnings",
            "pluging:import/typescript",
            "plugin:jest/recommended",
           /* "plugin:promise/recommended" */
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            ecmaVersion: 12,
            sourceTupe: "module",
        },
        "plugins": [
            "@typescript-eslint",
            /*"eslint-comments",*/
            /*"jest",*/
            /*"promise",*/
            "import",
            "prettier"
        ],
        "rules": {
           "prettier/prettier": "error",
           "import/extensions": "off",
           "import/no-unresolved": 'error',
           "no-console": "off",
           'import/order': [
             'error',
             {
                'newlines-between': 'never',
                groups: [
                    ['builtin', 'external'],
                    ['internal', 'parent', 'sibling', 'index'], 
                ],
             },
           ]
        },
        settins: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts'],
            },
            'import/resolver': {
                alwaystrytypes: true,
                project: './tsconfig.json',
            },
        },
}
