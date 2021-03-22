import React, { ReactElement } from 'react'
import Head from 'next/head'

import { TwitterIcon, GithubIcon } from '../components'
import normalizeCss from '../components/normalize.css'

import { globalStyles } from './theme.styles'
import { styles } from './home.styles'
import { data } from './data'
import { NgPartyIcon } from './logo'

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
        <div className="wrapper">
          <div className="wrapper">
            <div className="container">
              <Sponsors />
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
        <NgPartyIcon />
      </h1>
      <h2 className="brand-title">
        ngParty <small>Next Generation Development</small>
      </h2>
    </section>
  )
}

const Heading = (props: { title: string; subtitle?: string }) => {
  const { title, subtitle } = props
  return (
    <>
      <style jsx>
        {`
  .header {
    margin: 0 0 2rem 0;
    text-align: center;
  }
  .title {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  .subtitle {
    color: var(--accents-5)
    font-size: 1rem;
    font-weight: 200;
  }
`}
      </style>
      <header className="header">
        <h2 className="title">{title}</h2>
        {subtitle ? <h3 className="subtitle">{subtitle}</h3> : null}
      </header>
    </>
  )
}

const ImgList = (props: { items: ReactElement[] }) => {
  return (
    <>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 100%;
          gap: 1rem;
          list-style: none;
          padding: 0;
          margin: 0 0 1rem;
        }
        li {
          flex: 1 1;
          padding: 1rem;
          max-width: 500px;
        }
      `}</style>
      <ul>
        {props.items.map((item, idx) => {
          return <li key={idx}>{item}</li>
        })}
      </ul>
    </>
  )
}

const About = () => {
  return (
    <section className="about">
      <Heading title="About" />
      <p>
        Founded in 2015, ngParty is the local independent Next Generation
        development Community group in Prague/Czechia, committed to encourage,
        inspire and share JavaScript knowledge among its members.
      </p>
      <p>
        Let’s meet, learn and share! <br />
        <code aria-label="ngParty tags">
          #JavaScript, #devsUnited, #forDevelopersByDevelopers
        </code>
      </p>
    </section>
  )
}

const SponsorItem = (props: { name: string; img: string; link: string }) => {
  const { img, link, name: companyName } = props
  return (
    <>
      <style jsx>{`
        a {
          display: inline-block;
          min-width: 200px;
          width: 100%;
          border: 0px;
          filter: grayscale(100%);
          transition: filter 0.3s, transform 0.3s, box-shadow 0.2s ease;
        }
        a:hover,
        a:focus {
          filter: grayscale(0);
          box-shadow: var(--shadow-medium);
        }
      `}</style>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <amp-img
          alt={companyName}
          layout="responsive"
          width="200"
          height="200"
          src={img}
        ></amp-img>
      </a>
    </>
  )
}
const Sponsors = () => {
  return (
    <>
      <section className="section">
        <Heading
          title="Supporters"
          subtitle="We are very grateful and proud of our awesome sponsors."
        />
        <ImgList items={[<SponsorItem {...data.sponsors.livesport} />]} />
        <footer>
          <p>
            If you'd like to support us don't hesitate to drop us an email →{' '}
            <a href="mailto:ng@ngparty.cz">ng@ngparty.cz</a>
          </p>
        </footer>
      </section>
    </>
  )
}

/**
 *
 * @TODO
 */
const Organizers = () => {
  return null
}

const MainNav = () => {
  return (
    <nav className="nav">
      <ul>
        {data.navigation.map((item) => {
          return (
            <li key={item.label}>
              <a className={item.upcoming ? 'upcoming' : ''} href={item.link}>
                {item.label}
              </a>
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
        <FooterNavigation title="ngParty" data={data.navigation} />
        <FooterNavigation title="More" data={data.more} />
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
              <a href={data.contact.email.link}>{data.contact.email.label}</a>
            </span>
            <span> — </span>
            <span className="text">Copyright</span> &copy; {data.currentYear}{' '}
            ngParty, All rights reserved.
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
      {data.social.map((item) => {
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
