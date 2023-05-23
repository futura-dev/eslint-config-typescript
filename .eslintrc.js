module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-implicit-any-catch": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/strict-boolean-expressions": "error"
  }
};
