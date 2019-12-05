export const AmpStyleCustom = (props: { children?: string }) => (
  <style global jsx amp-custom="true">
    {`
      ${props.children}
    `}
  </style>
)
