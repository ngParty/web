const REMOTE_ORIGIN_REGEXP = /^https?:\/\//

/**
 * Smart <a/> abstraction.
 * Based on href it automatically adds target blank and noopener/noreferrer
 *
 * @param props
 */
export const A = (props: JSX.IntrinsicElements['a']) => {
  const { href } = props
  const isDifferentOriginLink = REMOTE_ORIGIN_REGEXP.exec(href || '')
  const renderProps: typeof props = {
    ...props,
    ...(isDifferentOriginLink
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : null),
  }

  return <a {...renderProps} />
}
