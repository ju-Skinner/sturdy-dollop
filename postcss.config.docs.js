const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')


module.exports = {
  plugins: [
    postcssNested(),
    postcssPresetEnv({
      features: {
        'focus-visible-pseudo-class': false,
      },
    }),
  ],
}
