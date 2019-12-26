declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': AMP.AmpImg
    'amp-iframe': AMP.AmpIframe
    'amp-analytics': AMP.AmpAnalytics
    'amp-sidebar': AMP.AmpSidebar
    'amp-lightbox': AMP.AmpLightBox
  }
}

declare module '*.css' {
  const value: Record<string, string>
  export default value
}
