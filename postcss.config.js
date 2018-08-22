const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const cssNano = require('cssnano');

module.exports = {
  plugins: [
    postcssPresetEnv({ stage: 0 }),
    postcssImport(),
    tailwindcss('./tailwind.js'),
    cssNano()
  ]
};
