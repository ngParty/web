declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': AMP.AmpImg
    'amp-iframe': AMP.AmpIframe
    'amp-analytics': AMP.AmpAnalytics
    'amp-sidebar': AMP.AmpSidebar
    'amp-lightbox': AMP.AmpLightBox
    'amp-script': AMP.AmpScript
  }
}

declare module '*.css' {
  const value: Record<string, string>
  export default value
}

declare module '@zeit/next-css' {
  type Api = any
  export = Api
}
declare module 'styled-jsx/webpack' {
  type Api = { loader?: string }
  export = Api
}

declare module 'styled-jsx/webpack-config' {
  type ValidTypes = 'scoped' | 'global' | 'resolve'
  type FileNameQuery = { query: { type: ValidTypes } }

  export type Options = {
    type:
      | ValidTypes
      | ((fileName: string, options: FileNameQuery) => ValidTypes)
  }
}
