import gts from 'gts';
import globals from 'globals';

export default [
  {ignores: ['**/node_modules/', '**/dist/', 'dashboard/.angular/']},
  ...gts,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./server/tsconfig.json', './web/tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {globals: globals.node},
  },
];
