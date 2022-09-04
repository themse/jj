module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  plugins: ['testing-library'],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[t]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
