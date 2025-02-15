/* eslint-disable @typescript-eslint/no-require-imports */
const typescriptEslintParser = require("@typescript-eslint/parser");
const prettierEslintConfig = require("eslint-plugin-prettier/recommended");
const typescriptEslintConfig = require("typescript-eslint");

module.exports = [
  prettierEslintConfig,
  ...typescriptEslintConfig.configs.recommended,
  {
    files: ["**/*.ts"],
    ignores: ["dist", "build", "node_modules"],
    languageOptions: {
      parser: typescriptEslintParser,
    },

    rules: {
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/explicit-function-return-type": "error",

      "prettier/prettier": [
        "error",
        {
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          trailingComma: "none",
          bracketSpacing: true,
          arrowParens: "always",
          endOfLine: "auto",
        },
      ],
    },
  },
];
