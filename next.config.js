// @ts-check

const withCSS = require('@zeit/next-css')

const cfg = {
  /**
   * @type {import('./next-config').WebpackConfig}
   */
  webpack: (config, options) => {
    /**
     * @type {import('webpack').Rule}
     * @see https://github.com/zeit/styled-jsx#styles-in-regular-css-files
     */
    const styledJsxRule = {
      test: /\.css$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,

          options: /** @type {import('styled-jsx/webpack-config').Options} */ ({
            type: (fileName, options) =>
              fileName.endsWith('.module.css')
                ? 'scoped'
                : options.query.type || 'global',
          }),
        },
      ],
    }

    config.module.rules.push(styledJsxRule)

    return config
  },
}

const config = withCSS({
  /* config options here */
  ...cfg,
})

module.exports = cfg
