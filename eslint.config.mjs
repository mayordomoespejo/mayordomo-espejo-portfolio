import eslintConfigNext from 'eslint-config-next';

export default [
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  ...eslintConfigNext,
];
