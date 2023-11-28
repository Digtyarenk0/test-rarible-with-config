module.exports = {
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', 'lingui', 'import'],
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        modulesDirectories: ['node_modules'],
      },
    },
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['charting_library'],
  rules: {
    // 'import/no-cycle': [
    //   'error',
    //   {
    // maxDepth: 2,
    //     ignoreExternal: true,
    //   },
    // ],
    //dev
    '@typescript-eslint/no-explicit-any': 0,
    'no-console': 0,
    //
    'no-debugger': 'warn',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    // 'no-console': ['warn', { allow: ['info', 'error'] }],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/display-name': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'Base/config/envs/index',
            group: 'builtin',
          },
          {
            pattern: 'app/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'entities/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'features/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'widgets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'processes/**',
            group: 'internal',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
};
