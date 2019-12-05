export const AmpStyleKeyframes = (props: { children?: string }) => (
  <style global jsx amp-keyframes="true">
    {`
      ${props.children}
    `}
  </style>
)
