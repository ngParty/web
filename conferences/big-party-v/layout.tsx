import Head from 'next/head'

import { normalizeStyles } from '../../components'

import { stylesUtils } from './utils.styles'
import { styles } from './layout.styles'
import { styles as buttonStyles } from './button.styles'

type Props = {
  title: string
  ampStyles?: React.ReactElement
  ampDependencies?: React.ReactElement | React.ReactElement[]
  children: React.ReactElement | React.ReactElement[]
}
export const Layout = (props: Props) => {
  const { ampDependencies, ampStyles, title, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/img/icons/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400"
          rel="stylesheet"
        />

        {/* AMP DEPS */}
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        {ampDependencies}
        {ampStyles}
      </Head>
      <style jsx global>
        {normalizeStyles}
      </style>
      <style jsx global>
        {stylesUtils}
      </style>
      <style jsx global>
        {buttonStyles}
      </style>
      <style jsx global>
        {styles}
      </style>
      {children}
    </>
  )
}
