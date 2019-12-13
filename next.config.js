// @ts-check

const withCSS = require('@zeit/next-css')

const cfg = {
  /**
   * @type {import('./next-config').WebpackConfig}
   */
  webpack: (config, options) => {
    // config.module.rules.push({
    //   test: /\.raw.css$/,
    //   use: 'raw-loader',
    // })
    return config
  },
}

const config = withCSS({
  /* config options here */
  ...cfg,
})

module.exports = config
