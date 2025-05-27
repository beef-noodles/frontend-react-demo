import { fileURLToPath } from 'node:url'

import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
// @ts-expect-error temp
import pluginImport from 'eslint-plugin-import'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url))

export default defineConfig([
  eslint.configs.recommended,
  // @ts-expect-error temp
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  includeIgnoreFile(gitignorePath),
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: { project: './tsconfig.json' },
      parser,
    },
  },
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '@app/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'no-console': 'error',
      ...pluginTypeScript.configs.recommended.rules,
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enumMember',
          format: ['PascalCase'],
        },
      ],
    },
  },
  {
    ignores: ['node_modules/', 'build/'],
  },
])
