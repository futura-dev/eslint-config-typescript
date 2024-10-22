/* eslint-disable no-undef */

module.exports = {
  // parser
  parser: "@typescript-eslint/parser",

  // ignore
  ignorePatterns: ["dist", "build"],

  // extensions
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  // rules
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-implicit-any-catch": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/explicit-function-return-type": "error",

    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        trailingComma: "none",
        bracketSpacing: true,
        arrowParens: true,
        endOfLine: "auto",
        arrowParens: "avoid",
      },
    ],
  },
};
