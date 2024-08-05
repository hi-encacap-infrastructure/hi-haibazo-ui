import pluginCspellConfigs from '@cspell/eslint-plugin/configs';
import { fixupPluginRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSonarjs from 'eslint-plugin-sonarjs';
import pluginStorybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
  },
  {
    plugins: {
      'react-hooks': fixupPluginRules(pluginReactHooks),
    },
  },
  {
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      '@cspell/spellchecker': [
        'warn',
        {
          cspell: {
            import: ['./cspell.config.yml', '@cspell/dict-typescript'],
          },
          cspellOptionsRoot: import.meta.url,
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: ['dist', 'node_modules', 'storybook-static', '!.storybook'],
  },
  ...tsEslint.configs.recommended,
  ...pluginStorybook.configs['flat/recommended'],
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginSonarjs.configs.recommended,
  pluginCspellConfigs.recommended,
  pluginJs.configs.recommended,
  pluginPrettierRecommended,
];
