// @ts-check

/**
 * @type {Partial<import('./next-config').NextConfig>}
 */
const config = {
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
            type: 'global',
          }),
        },
      ],
    }

    config.module.rules.push(styledJsxRule)

    return config
  },
}

module.exports = config
