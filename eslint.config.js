import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'docs/assets'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    files: ['scripts/*.mjs', 'tests/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
    },
  },
)
