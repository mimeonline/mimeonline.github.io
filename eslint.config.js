// eslint.config.js
import astroPlugin from 'eslint-plugin-astro';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['*.js', '*.astro'], // Dateien, die überprüft werden sollen
    languageOptions: {
      ecmaVersion: 'latest', // Für moderne JavaScript-Syntax
      sourceType: 'module',
    },
    plugins: {
      astro: astroPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Prettier-Fehler als ESLint-Fehler anzeigen
    },
  },
  {
    files: ['*.astro'],
    processor: astroPlugin.processors['.astro'],
  },
];
