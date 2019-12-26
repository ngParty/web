import React from 'react'
import Head from 'next/head'

import { NgPartyIcon, TwitterIcon, GithubIcon } from '../components'
import normalizeCss from '../components/normalize.css'

import { globalStyles } from './theme.styles'
import { styles } from './home.styles'
import { DATA } from './data'

export const Home = () => (
  <>
    <Head>
      <title>ngParty - next generation development</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>
      {normalizeCss}
    </style>
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx global>
      {styles}
    </style>

    <Layout />
  </>
)

const Layout = () => {
  return (
    <>
      <main className="screen">
        <div className="wrapper">
          <div className="hero flex align-center">
            <Logo />
            <MainNav />
          </div>
        </div>
        <div className="wrapper-dark">
          <div className="wrapper">
            <div className="container">
              <About />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const Logo = () => {
  return (
    <section className="logo-container">
      <h1 className="logo">
        <NgPartyIcon width="100%" />
      </h1>
      <h2 className="brand-title">
        ngParty <small>Next Generation Development</small>
      </h2>
    </section>
  )
}

const About = () => {
  return (
    <section className="about">
      <p>
        Founded in 2015, ngParty is the local independent Next Generation
        development Community group in Prague/Czechia, committed to encourage,
        inspire and share JavaScript knowledge among its members.
      </p>
      <p>
        Let’s meet, learn and share! <br />
        <code aria-label="ngParty tags">
          #JavaScript, #ForCommunityByCommunity, #devsUnited
        </code>
      </p>
    </section>
  )
}

const MainNav = () => {
  return (
    <nav className="nav">
      <ul>
        {DATA.navigation.map((item) => {
          return (
            <li key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <FooterNavigation title="ngParty" data={DATA.navigation} />
        <FooterNavigation title="More" data={DATA.more} />
      </div>
      <div className="footer-wrapper">
        <div className="footer-wrapper-left">
          <div className="logotype">
            <NgPartyIcon height={40} />
          </div>
        </div>
        <div className="footer-wrapper-right">
          <span className="footer-contact">
            <FooterSocial />
          </span>
          <span className="copyright">
            <span className="text">
              <a href={DATA.contact.email.link}>{DATA.contact.email.label}</a>
            </span>
            <span> — </span>
            <span className="text">Copyright</span> &copy; 2019 ngParty, All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

const FooterNavigation = (props: {
  title?: string
  data: { link: string; label: string }[]
}) => {
  const { data, title } = props

  return (
    <ul className="footer-navigation">
      <li className="footer-navigation-title">{title}</li>
      {data.map((item) => {
        return (
          <li key={item.label}>
            <a className="" href={item.link}>
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

const FooterSocial = () => {
  const icons = {
    twitter: <TwitterIcon fill="var(--ng-foreground)" />,
    github: <GithubIcon fill="var(--ng-foreground)" />,
  }

  return (
    <ul className="footer-social">
      {DATA.social.map((item) => {
        const icon = icons[item.id]

        return (
          <li key={item.id}>
            <a
              href={item.link}
              rel="noopener"
              target="_blank"
              aria-label={item.label}
              className=""
            >
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
