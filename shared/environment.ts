import { NextPageContext } from 'next'

export const isClient = typeof window !== 'undefined'

/**
 *
 * helper for getInitialProps, if you need to use it with `next export`
 */
export const isStaticExport = (ctx: NextPageContext) =>
  typeof ctx.res!.writeHead !== 'function'
