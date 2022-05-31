const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')


module.exports = {
  plugins: [
    postcssNested(),
    postcssPresetEnv({
      features: {
        'focus-visible-pseudo-class': false,
      },
    }),
    postcssImport(),
  ],
}
