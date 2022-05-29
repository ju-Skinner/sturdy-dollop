const commonTSConfig = {
  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@stencil/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'promise',
  ],
  rules: {
    '@stencil/decorators-style': 0,
    '@stencil/decorators-context': 0,
    '@stencil/element-type': 0,
    '@stencil/no-unused-watch': 0,
    '@stencil/strict-boolean-conditions': 0,
    '@stencil/strict-mutable': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-extra-semi': 0,
    'prettier/prettier': 'error',
  },
}

module.exports = {
  env: {
    amd: true,
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  overrides: [
    {
      ...commonTSConfig,
      files: ['*.ts'],
    },
    {
      ...commonTSConfig,
      files: ['src/sage/**/*.ts', 'src/sage/**/*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      ...commonTSConfig,
      files: [
        'src/docs/**/*.ts',
        'src/docs/**/*.tsx',
        'src/sage/**/test/*.ts',
      ],
      parserOptions: {
        project: ['./tsconfig.docs.json'],
      },
    },
  ],
  plugins: ['@babel']
}
