declare namespace AMP {
  type Layouts =
    | 'responsive'
    | 'fixed'
    | 'fill'
    | 'fixed-height'
    | 'flex-item'
    | 'container'
    | 'nodisplay'
    | 'intrinsic'
  interface AmpBaseElement extends JSX.IntrinsicAttributes {}

  interface AmpLightBox extends AmpBaseElement {
    id: string
    layout: 'nodisplay'
    children?: React.ReactNode
  }
  interface AmpSidebar extends AmpBaseElement {
    id: string
    className?: string
    layout: 'nodisplay'
    side: 'left' | 'right'
    children?: React.ReactNode
  }
  interface AmpImg extends AmpBaseElement {
    alt?: string
    src?: string
    width?: string
    height?: string
    layout?: Layouts
    className?: string
    children?: React.ReactNode
  }

  interface AmpIframe extends AmpBaseElement {
    width?: string
    height?: string
    sandbox?: string
    layout?: string
    frameborder?: string
    src?: string
    className?: string
    children?: React.ReactNode
  }
  interface AmpAnalytics extends AmpBaseElement {}

  interface AmpScript {
    width?: string
    height?: string
    script?: string
    src?: string
    layout?: Layouts
    children?: React.ReactNode
  }
}
