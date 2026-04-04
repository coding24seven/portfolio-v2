import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint, * as typescriptEslint from 'typescript-eslint';
import { type Config, defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const customConfig: Config = {
  name: 'custom',
  languageOptions: {
    parser: typescriptEslint.parser,
    parserOptions: {
      project: './tsconfig.eslint.json',
    },
  },
  /* no need for registering `plugins: { '@typescript-eslint': typescriptEslintPlugin, prettier: eslintPluginPrettier }` in order to use `rules`, as those plugins are already included in their respective config objects */
  rules: {
    'prettier/prettier':
      'error' /* makes any Prettier violation an error, and eslint --fix runs Prettier to resolve it. */,
    'no-case-declarations': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  typescriptEslint.configs
    .recommended /* sets default TS rules, and registers @typescript-eslint as a plugin, so rules such as '@typescript-eslint/no-unused-vars' can be used in configs, without adding `plugins: {'@typescript-eslint': typescriptEslintPlugin}` in those configs */,
  customConfig,
  eslintPluginPrettierRecommended /* enables the eslint-config-prettier config which will turn off ESLint rules that conflict with Prettier, via prettier/prettier rule */,
]);
