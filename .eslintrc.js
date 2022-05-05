module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  plugins: ['prettier'],
  extends: ['plugin:vue/essential', 'airbnb/base'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'max-len': ['error', { code: 120 }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': 'error',
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'implicit-arrow-linebreak': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'vue/multi-word-component-names': 0,
    'linebreak-style': 0
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true
      }
    }
  ]
};
