type NextDefaultPathMap<Q extends Record<string, unknown>> = Record<
  string,
  { page: string; query?: Q }
>
export interface NextConfig {
  webpack: WebpackConfig
  pageExtensions: string[]
  env: Record<string, string>
  assetPrefix: string
  target: 'serverless' | 'server'
  compress: boolean
  devIndicators: {
    autoPrerender: boolean
  }
  poweredByHeader: boolean
  generateEtags: boolean
  distDir: string
  typescript: {
    ignoreDevErrors: boolean
    ignoreBuildErrors: boolean
  }
  exportPathMap: boolean
  exportTrailingSlash: <Q>(
    defaultPathMap: NextDefaultPathMap<Q>,
    options: {
      dev: boolean
      dir: string
      outDir: string | null
      distDir: string
      buildId: string
    }
  ) => Promise<NextDefaultPathMap>
}

export type WebpackConfig = <
  T extends Required<import('webpack').Configuration>
>(
  config: T,
  options: NextWebpackOptions
) => T & object

export interface NextWebpackOptions {
  // String the build id used as a unique identifier between builds
  buildId: string
  // Boolean shows if the compilation is done in development mode
  dev: boolean
  // Boolean shows if the resulting configuration will be used for server side (true), or client side compilation (false)
  isServer: boolean
  //  - Object Holds loader objects Next.js uses internally, so that you can use them in custom configuration
  defaultLoaders: {
    // Object the babel-loader configuration for Next.js
    babel: object
  }
}
