module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    globals: {
        React: false,
        ReactDOM: false,
        Redux: false,
        PropTypes: false, // turns the global variable check off
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        quotes: ["error", "single"],
        indent: ["error", 4],
        "max-classes-per-file": ["error", 2],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        semi: ["error", "never"],
        "import/extensions": [1, {
            js:"ignorePackages"
          }],
        "react/jsx-indent": [1, 4],
        "react/jsx-indent-props": [1, 4],
        "react/jsx-props-no-spreading": [1, {
            "html": "enforce",
            "custom": "ignore",
            "explicitSpread": "enforce",
           }],
        'no-plusplus': 'off',
        "react/prefer-stateless-function": [0],
        "react/destructuring-assignment": [0, 'always'],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}]
    },
};
