module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-unsafe-finally': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
  },
};
