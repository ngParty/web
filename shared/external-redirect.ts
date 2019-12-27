import React from 'react'
import {
  NextApiRequest,
  NextApiResponse,
  NextPage,
  NextPageContext,
} from 'next'
import Router from 'next/router'

export const redirectTo = (redirectUrl: string) => {
  const Redirect = () => {
    return React.createElement('div', null, 'redirecting...')
  }
  Redirect.getInitialProps = async ({ res }: NextPageContext) => {
    if (res) {
      res.writeHead(302, { Location: redirectUrl })
      res.end()
      return
    }

    Router.push(redirectUrl)
  }

  return Redirect
}
