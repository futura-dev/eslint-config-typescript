const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const prettierEslintPlugin = require('eslint-plugin-prettier/recommended');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config([
  prettierEslintPlugin,
  {
    files: ['**/*.js', '**/*.ts'],
    ignores: ['dist', 'build'],
    languageOptions: {
      parser: typescriptEslintParser
    },

    plugins: {
      '@typescript-eslint': typescriptEslintPlugin
    },

    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-implicit-any-catch': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',

      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          arrowParens: true,
          endOfLine: 'auto',
          arrowParens: 'avoid'
        }
      ]
    }
  }
]);