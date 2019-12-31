const DATA = {
  description: `April 7 2020 / Prague, Czechia. 5th edition of unique JavaScript community conference in Czechia. Community, international experts, networking, tons of knowledge. Join us!`,
  title: `ngBigParty V - JavaScript, Age of compilers and A.I.`,
  facebook: {
    id: 'ngPartyCz',
    img: '/img/big-party-v/social/big-party-v-card.jpeg',
  },
  twitter: {
    id: '@ngPartyCz',
    img: '/img/big-party-v/social/big-party-v-card.jpeg',
  },
  ico: '/img/icons/favicon.ico?v=1',
  appleIco: {
    maskIco: '/img/big-party-v/meta/safari-pinned-tab.svg?v=1',
    touchIco: '/img/big-party-v/meta/apple-touch-icon.png?v=1',
    favicon: {
      16: '/img/big-party-v/meta/favicon-16x16.png?v=1',
      32: '/img/big-party-v/meta/favicon-32x32.png?v=1',
    },
  },
  microsoft: {
    config: '/img/big-party-v/meta/browserconfig.xml?v=1',
  },
  manifest: '/img/big-party-v/meta/manifest.json',
}

export const Meta = (props: { theme: typeof import('./theme').theme }) => {
  const { theme } = props
  return (
    <>
      <meta name="description" content={DATA.description} />
      <meta name="copyright" content={DATA.title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={DATA.title} />
      <meta name="application-name" content={DATA.title} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={DATA.appleIco.touchIco}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={DATA.appleIco.favicon[32]}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={DATA.appleIco.favicon[16]}
      />
      <link rel="mask-icon" href={DATA.appleIco.maskIco} color="#f74c4f" />
      <link rel="manifest" href={DATA.manifest} />
      <link rel="shortcut icon" href={DATA.ico} />
      <meta name="msapplication-config" content={DATA.microsoft.config} />
      <meta name="theme-color" content={theme.colors.primary} />

      {/*
        use link[href] to define image url for microdata
       */}
      <link itemProp="image" href={DATA.twitter.img} />

      {/* OGP meta */}
      <meta property="og:title" content={DATA.title} />
      <meta property="og:image" content={DATA.facebook.id} />
      <meta property="og:description" content={DATA.description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="" /> */}

      {/* Twitter meta */}
      <meta name="twitter:title" content={DATA.title} />
      <meta name="twitter:description" content={DATA.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={DATA.twitter.id} />
      <meta name="twitter:image" content={DATA.twitter.img} />
    </>
  )
}
