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
  variants: {
    borderWidth: ['first'],
  },
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          background: config('theme.colors.gray.800'),
          color: config('theme.colors.white'),
          h1: {
            fontSize: config('theme.fontSize.6xl'),
            fontWeight: config('theme.fontWeight.bold'),
            marginBottom: config('theme.margin.4'),
            textAlign: 'center',
          },
          h2: {
            fontSize: config('theme.fontSize.4xl'),
            fontWeight: config('theme.fontWeight.bold'),
            marginBottom: config('theme.margin.3'),
          },
        },
      })
    },
  ],
}
