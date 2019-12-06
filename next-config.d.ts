export type WebpackConfig = <T extends object>(
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
