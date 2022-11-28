module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-curly-newline': 'off',
    'react/button-has-type': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
    'react/self-closing-comp': 'off',
    'import/order': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    "react/no-unknown-property": [
      2,
      {
        "ignore": [
          "jsx","global"
        ]
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    //     moduleDirectory: ['node_modules', 'components/'],
    //   },
    // },
  },
};
