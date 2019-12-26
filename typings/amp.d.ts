declare namespace AMP {
  interface AmpLightBox {
    id: string
    layout: 'nodisplay'
    children?: React.ReactNode
  }
  interface AmpSidebar {
    id: string
    className?: string
    layout: 'nodisplay'
    side: 'left' | 'right'
    children?: React.ReactNode
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
    children?: React.ReactNode
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
}
