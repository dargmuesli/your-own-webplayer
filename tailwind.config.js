/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          background: config('theme.colors.gray.800'),
          color: config('theme.colors.white'),
        },
      })
    },
  ],
}
