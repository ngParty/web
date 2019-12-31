import { styles, lightboxStyles } from './speakers.styles'
import { TwitterIcon, LinkedInIcon } from '../../components'

interface SpeakerModel {
  id: string
  name: string
  img: string
  company: string
  jobTitle: string
  country: string
  about: string
  social: {
    twitter: string
    github: string
    linkedin: string
  }
  talk: {
    title: string
    abstract: string
    media: {
      slides: string
      video: string
    }
  }
}
const DATA: SpeakerModel[] = [
  {
    id: 'andrei-pfeiffer',
    name: 'Andrei Pfeiffer',
    img: '/img/big-party-v/speakers/andrei.jpg',
    company: '[e-spres-oh]',
    jobTitle: 'Code Designer',
    country: 'RO, Timisoara',
    about: `Andrei is a "designer / developer hybrid", specialized in UI development, both on web and mobile. He's been developing web sites and applications since 2000 and went through all the stages, from HTML3 to HTML5, from ES3 to ES6 and beyond, from designer to code designer.

    He organizes revo.js conference & tim.js which is the local JavaScript meetup in Timisoara/RO.`,
    social: {
      twitter: 'https://twitter.com/pfeiffer_andrei',
      github: '',
      linkedin: 'https://www.linkedin.com/in/andreipfeiffer/',
    },
    talk: {
      title: 'Simple vs Easy',
      abstract: `We all love "simple" solutions. They are "easy to use", right? Well, not necessary. What about "complexity"? Can we avoid it?
      We need to deal with complexity all the time, from the daily functions and UI components that we write, to the big architectural decisions we have to make from time to time.
      In this walk we'll explore complexity from different angles, debate how we can manage it, but also how to appreciate it more.`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'asim-hussain',
    name: 'Asim Hussain',
    img: '/img/big-party-v/speakers/asim.jpg',
    company: 'Microsoft',
    jobTitle: 'Green Cloud Advocacy Lead',
    country: 'UK, London',
    about: `Asim is a developer, trainer, author and speaker with over 19 years experience working for organisations such as the European Space Agency, Google and now Microsoft, where he is the Green Cloud Advocacy Lead.`,
    social: {
      twitter: 'https://twitter.com/jawache',
      github: '',
      linkedin: 'https://www.linkedin.com/in/jawache/',
    },
    talk: {
      title: '12 Factor Green App',
      abstract: `What is a mortgage? It’s a bet on your future. Being Green is a bet on the future of your children and grandchildren. It’s a bet that you can leave a better world for them that the one you inherited. It’s a bet we can make right now with the technology we already have, and it’s a bet that we can win. In this talk, I’ll explain how to build a Green application, front to back. You’ll walk away understanding why it’s crucial, how building Green apps will give you a competitive advantage and a step by step set of instructions for how to build one.`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'sebastian-aigner',
    name: 'Sebastian Aigner',
    img: '/img/big-party-v/speakers/sebastian-a.jpg',
    company: 'JetBrains',
    jobTitle: 'Developer Advocate',
    country: 'DE, Munich',
    about: `In the role of Developer Advocate at JetBrains, Sebastian spends a large chunk of his day thinking about how technologies can empower and delight people. He loves building networked applications and using Kotlin on a multitude of platforms (including the browser), as well as hacking up strange ideas late at night. He focuses on topics around Kotlin/JS and Education at JetBrains.`,
    social: {
      twitter: 'https://twitter.com/truesebi',
      github: '',
      linkedin: 'https://www.linkedin.com/in/sebastian-aigner/',
    },
    talk: {
      title: 'Kotlin goes Web! Exploring the JavaScript target for Kotlin',
      abstract: `In this talk, we'll have a look at how Kotlin, the multi-platform language developed by JetBrains, feels right at home on one of the most potent and prominent platforms of the last decade: the browser.

      We'll see how applications for the browser are written with typical idioms and features from Kotlin, what interaction looks like between JavaScript and Kotlin, and what libraries are available from the Kotlin ecosystem that make working with web technologies a breeze – from concurrent applications with coroutines to painless and typesafe communication.`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'sebastian-witalec',
    name: 'Sebastian Witalec',
    img: '/img/big-party-v/speakers/sebastian-w.jpg',
    company: 'Progress',
    jobTitle: 'Senior Developer Advocate',
    country: 'UK, London',
    about: `Sebastian Witalec is a Google Developer Expert for Angular. He loves working on both serious and fun projects and one day he will use his robot army to conquer the world.`,
    social: {
      twitter: 'https://twitter.com/sebawita',
      github: '',
      linkedin: 'https://www.linkedin.com/in/sebawita/',
    },
    talk: {
      title: 'Building a chatbot for an Angular Application',
      abstract: `Chatbots introduce a whole new way for users to interact with your websites. A good chatbot can save your users from long and complicated forms, cut down on support requests, and make your services more approachable.
      If you've ever wondered how to build a chatbot, then this session is for you. You will:

      * Dive into the core concepts of what makes a chatbot.
      * Learn how to employ Machine Learning and Natural Language Processing to create a conversation flow that feels 100% natural.
      * Look at a variety of possible conversations and challenges that go with them.

      But more importantly, you will learn how to build a fully functioning chatbot and add it to your Angular app in less than 15 minutes—all without a single IF statement.`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'patrick-stapfer',
    name: 'Patrick Stapfer',
    img: '/img/big-party-v/speakers/patrick.jpg',
    company: 'Reason Association',
    jobTitle: 'System Engineer',
    country: 'AT, Vienna',
    about: `Patrick is board member of the Reason Association, a non-profit organization to develop and support the Reason and OCaml platform. He is currently working on the new documentation website (reasonml.org) and on an improved Reason online playground to greatly improve the developer experience. He is also taking part in coordinating relevant community efforts to make sure to reach and document important milestones.`,
    social: {
      twitter: 'https://twitter.com/ryyppy',
      github: '',
      linkedin: 'https://www.linkedin.com/in/patrick-stapfer-5ba205a4/',
    },
    talk: {
      title: 'The ReasonML Platform',
      abstract: `ReasonML is a functional programming language with first level React support. It has been around for several years and had enough time to evolve, coordinate, and iterate on many different aspects of the platform, may it be the syntax, the JS compiler, the community libraries, documentation or even legal organization.

      Other programming language communities might have been observing the language carefully from the distance, but probably never had a real motivation of trying it out. This talk will give some insights on the language, the ecosystem, distinct features and will also highlight some recent accomplishments and milestones within the Reason community.

      In the end attendees will understand why Reason users are excited about the language and what sets it apart from other similar looking ecosystems and may be even interested in trying it out themselves.`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'boyan-mihaylov',
    name: 'Boyan Mihaylov',
    img: '/img/big-party-v/speakers/boyan.jpg',
    company: 'Fadata',
    jobTitle: 'Software Architect and Developer',
    country: 'BG, Sofia',
    about: `Boyan is a software architect and developer, thinking human-first when writing software. He enjoys experimenting and talking about technology and its application to solving everyday problems. He prefers working solutions over concrete frameworks and languages. Boyan believes technology needs more storytelling and he tries to convey such.`,
    social: {
      twitter: 'https://twitter.com/boyanio',
      github: '',
      linkedin: 'https://www.linkedin.com/in/boyanio/',
    },
    talk: {
      title: 'TODO',
      abstract: `TODO`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
]

export const Speakers = () => {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <style jsx global>
        {lightboxStyles}
      </style>
      <ul className="speaker-list">
        {DATA.map((item) => {
          return (
            <li key={item.id}>
              <Speaker data={item} />
            </li>
          )
        })}
      </ul>
      <p className="center">Stay tunned for more speaker announcements !</p>
    </>
  )
}

const Speaker = (props: { data: SpeakerModel }) => {
  const { data } = props
  const { twitter, linkedin } = formatSocialHandles(data.social)

  const modalId = `lightbox-${data.id}`
  return (
    <>
      <section
        className="card card-speaker"
        on={`tap:${modalId}`}
        tabIndex={0}
        role="button"
      >
        <amp-img
          className="card-img"
          layout="responsive"
          src={data.img}
          width="200"
          height="200"
        ></amp-img>
        <div className="card-info">
          <h2 className="card-heading">{data.name}</h2>
          <p className="card-speaker-title">
            {data.jobTitle}
            <br />
            <span className="card-speaker-company">at {data.company}</span>
          </p>
        </div>
      </section>
      <amp-lightbox id={modalId} layout="nodisplay">
        <div
          className="lightbox"
          role="button"
          on={`tap:${modalId}.close`}
          tabIndex={0}
        >
          <div className="lightbox-content">
            <h2 className="lightbox-headline">{data.name}</h2>
            <h3 className="lightbox-subtitle">
              {data.jobTitle} <span>at {data.company}</span>
            </h3>
            <p className="lightbox-social">
              <a href={twitter.link} target="_blank" rel="noopener noreferrer">
                <TwitterIcon width={'1em'} />
                {twitter.label}
              </a>
              <a href={linkedin.link} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon width={'1em'} />
                {linkedin.label}
              </a>
            </p>
            <p className="lightbox-bio">{data.about}</p>
          </div>
        </div>
      </amp-lightbox>
    </>
  )
}

const socialUrls = {
  twitter: 'https://twitter.com/',
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/',
}
const formatSocialHandle = (
  handleValue: string,
  type: keyof typeof socialUrls
) => {
  const label = stripTrailingSlash(handleValue.replace(socialUrls[type], '@'))
  const link = handleValue

  return {
    label,
    link,
  }
}
const formatSocialHandles = (
  options: SpeakerModel['social']
): Record<keyof SpeakerModel['social'], { link: string; label: string }> => {
  return {
    github: formatSocialHandle(options.github, 'github'),
    twitter: formatSocialHandle(options.twitter, 'twitter'),
    linkedin: formatSocialHandle(options.linkedin, 'linkedin'),
  }
}

const transformSpeakerName = (name: string) => {
  const [firstName, lastName] = name.split(' ')

  return { firstName, lastName }
}

const stripTrailingSlash = (value: string) => {
  return value.endsWith('/') ? value.slice(0, -1) : value
}
