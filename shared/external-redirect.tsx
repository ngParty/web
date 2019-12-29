import React, { useEffect } from 'react'
import { NextPageContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

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

export const redirectTo = (redirectUrl: string, { external = true } = {}) => {
  const Redirect = () => {
    const router = useRouter()

    useEffect(() => {
      if (external) {
        window.location.href = redirectUrl
        return
      }
      router.push(redirectUrl)
    }, [])

    return React.createElement('div', null, 'Redirecting...')
  }

  return Redirect
}

function serverRedirect(res: NextPageContext['res'], redirectUrl: string) {
  if (res) {
    res.writeHead(302, { Location: redirectUrl })
    res.end()
  }
}
