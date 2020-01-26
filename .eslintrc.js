const path = require("path");

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "react-hooks"
  ],
  rules: {
    camelcase: "off",
    "class-methods-use-this": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "react/state-in-constructor": "off",
    "react/prop-types": "off",
    "simple-import-sort/sort": "error",
    "import/first": "error",
    "import/extensions": ["error", "never"],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        parser: "typescript",
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        trailingComma: "es5",
        jsxBracketSameLine: false
      }
    ],
    "no-console": "off"
  },
  settings: {
    react: {
      version: "16.10"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"]
      }
    },
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
