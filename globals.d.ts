import React from 'react'
declare module 'react' {
  interface DOMAttributes<T> {
    on?: string
  }
}

declare global {
  declare namespace JSX {
    interface AmpLightBox {
      id: string
      layout: 'nodisplay'
    }
    interface AmpSidebar {
      id: string
      className?: string
      layout: 'nodisplay'
      side: 'left' | 'right'
    }
    interface AmpImg {
      alt?: string
      src?: string
      width?: string
      height?: string
      layout?:
        | 'responsive'
        | 'fixed'
        | 'fill'
        | 'fixed-height'
        | 'flex-item'
        | 'container'
        | 'nodisplay'
        | 'intrinsic'
      className?: string
    }

    interface AmpIframe {
      width?: string
      height?: string
      sandbox?: string
      layout?: string
      frameborder?: string
      src?: string
      className?: string
      children?: React.ReactNode
    }
    interface AmpAnalytics {}

    interface IntrinsicElements {
      'amp-img': AmpImg
      'amp-iframe': AmpIframe
      'amp-analytics': AmpAnalytics
      'amp-sidebar': AmpSidebar
      'amp-lightbox': AmpLightBox
    }
  }
}

declare module '*.css' {
  const value: Record<string, string>
  export default value
}
