declare namespace JSX {
  interface AmpImg {
    alt?: string
    src?: string
    width?: string
    height?: string
    layout?: string
  }

  interface AmpIframe {
    width?: string
    height?: string
    sandbox?: string
    layout?: string
    frameborder?: string
    src?: string
    children?: React.ReactNode
  }
  interface AmpAnalytics {}

  interface IntrinsicElements {
    'amp-img': AmpImg
    'amp-iframe': AmpIframe
    'amp-analytics': AmpAnalytics
  }
}
