import Head from 'next/head'

import normalizeCss from '../../components/normalize.css'

import { stylesUtils } from './utils.styles'
import { styles } from './layout.styles'
import { styles as buttonStyles } from './button.styles'
import { Meta } from './meta'
import { theme } from './theme'

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
        <Meta theme={theme} />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400"
          rel="stylesheet"
        />

        {/* AMP DEPS */}
        {ampDependencies}
        {ampStyles}
      </Head>
      <style jsx global>
        {normalizeCss}
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
