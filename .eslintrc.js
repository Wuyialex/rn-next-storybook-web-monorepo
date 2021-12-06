module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  parser: '@typescript-eslint/parser',
  extends: [
    // default
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // react
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@react-native-community',
    // import-order
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'no-console': 0,
    'object-shorthand': ['error', 'always'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-unescaped-entities': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 0,
  },
  settings: {
    'import/ignore': ['react-native'],
  },
};
