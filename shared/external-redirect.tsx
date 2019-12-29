import React from 'react'
import { NextPageContext } from 'next'
import Head from 'next/head'
import Router from 'next/router'

/**
 * @experimental
 *
 * NOTE: this doesn't work as `http-equiv="refresh"` is forbidden within AMP
 */
export const ampRedirectTo = (redirectUrl: string) => {
  const Redirect = () => {
    return (
      <>
        <Head>
          <meta http-equiv="refresh" content={`0;url=${redirectUrl}`} />
        </Head>
        <p>Redirecting...</p>
      </>
    )
  }

  return Redirect
}

/**
 * NOTE:
 * 1. This doesn't work with `next export` as getInitialProps work only with node served app
 * 2. `Router.push` is unable to push external urls
 */
export const redirectTo = (redirectUrl: string, { external = false } = {}) => {
  const Redirect = () => {
    return React.createElement('div', null, 'redirecting...')
  }
  Redirect.getInitialProps = async ({ res }: NextPageContext) => {
    if (res) {
      res.writeHead(302, { Location: redirectUrl })
      res.end()
      return {}
    }

    if (external) {
      window.location.href = redirectUrl
    } else {
      Router.push(redirectUrl)
    }

    return {}
  }

  return Redirect
}
