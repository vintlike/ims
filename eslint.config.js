import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      // @ts-ignore
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    // @ts-ignore
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/consistent-type-imports': ['warn'],
      // 关闭定义变量未使用提示/报错
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prefer-spread': ['off'],
      '@typescript-eslint/no-empty-interface': ['off'],
      'no-var': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'no-constant-condition': 'warn',
      'no-unsafe-finally': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'prefer-const': 'off',
      'ts/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-empty': 'off'
    }
  }
);
