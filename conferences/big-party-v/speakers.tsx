import { styles } from './speakers.styles'
import { PersonCard, SpeakerModel } from './shared'

const DATA: SpeakerModel[] = [
  {
    id: 'andrei-pfeiffer',
    name: 'Andrei Pfeiffer',
    img: '/big-party-v/img/speakers/andrei.jpg',
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
    img: '/big-party-v/img/speakers/asim.jpg',
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
    id: 'lian-li',
    name: 'Lian Li',
    img: '/big-party-v/img/speakers/lian-li.jpg',
    company: 'Container Solutions',
    jobTitle: 'Cloud Native Consultant',
    country: 'NL, Amsterdam',
    about: `Lian always wanted to save the world.
    After a failed attempt at becoming a lawyer, she decided to do something with computers instead. Working as a Fullstack Software Engineer, she got into attending tech events and giving talks on Machine Learning with JavaScript all around the world. She fell in love with the tech community, which led to her co-organising the community conference ServerlessDays Amsterdam.
    Currently, Lian lives in Amsterdam and works as Cloud Native Engineer at Container Solutions, a consultancy focused on programmable infrastructure.
    `,
    social: {
      twitter: 'https://twitter.com/Chimney42',
      github: '',
      linkedin: 'https://www.linkedin.com/in/lian-li/',
    },
    talk: {
      title: 'Machine Learning in the browser',
      abstract: `Even if you've never done anything with machine learning, you have probably already heard that it's very powerful, adaptive and will change our way of thinking about computing forever.
      But how can you, a web developer, who's never been interested much in statistics benefit from the ML hype?
      In this talk I want to give you the tools to build a small self-learning application that runs completely in the browser with tensorflowJS
      `,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'sebastian-aigner',
    name: 'Sebastian Aigner',
    img: '/big-party-v/img/speakers/sebastian-a.jpg',
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
    img: '/big-party-v/img/speakers/sebastian-w.jpg',
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
      If you've ever wondered how to build a chatbot, then this session is for you.
      <br/>
      You will:
      <ul>
      <li>Dive into the core concepts of what makes a chatbot.</li>
      <li>Learn how to employ Machine Learning and Natural Language Processing to create a conversation flow that feels 100% natural.</li>
      <li>Look at a variety of possible conversations and challenges that go with them.</li>
      </ul>
      <br/>
      But more importantly, you will learn how to build a fully functioning chatbot and add it to your Angular app in less than 15 minutes—all without a single IF statement.`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'lili-kastilio',
    name: 'Lili Kastilio',
    img: '/big-party-v/img/speakers/lili.jpg',
    company: 'Snyk',
    jobTitle: 'Lead Engineer',
    country: 'UK, London',
    about: `Full Stack engineer and Team Lead at Snyk, working on extending our current languages offering by introducing new languages and language specific concepts into our system in a shape of libs, parsers and microservices. Spending lots of time working on dependency resolution, understanding the inner workings of package managers and integrating with package registries. Apart from coding I love learning circus skills, you will often find me swinging on a flying trapeze after work.`,
    social: {
      twitter: 'https://twitter.com/lilianakastilio',
      github: '',
      linkedin: 'https://www.linkedin.com/in/kastilioliliana/',
    },
    talk: {
      title: 'Lessons learned converting Snyk codebase to TypeScript',
      abstract: `Snyk have recently converted their entire codebase to TypeScript, Lili would like to share the reasons, motivations and lesson learned with others thinking to do the same.
      There have been wins and bumps along the way but overall they left their codebase in a much better place than ever before.

      Lili would also like to share where they got to so far, what slowed them down in some places and what is their plan to complete the migration to 100% of the codebase.

      Many companies are thinking of using TypeScript but may be scared to do so, Lili hope this talk can share some insight into what this journey is like.`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'natalia-vokrouhlecka',
    name: 'Natalia Vokrouhlecká',
    img: '/big-party-v/img/speakers/natalia.jpg',
    company: 'MSD',
    jobTitle: 'Web Developer',
    country: 'CZ, Prague',
    about: `Natalia is a web developer. She is passionate about teaching children programming and organising workshops for developers.`,
    social: {
      twitter: '',
      github: '',
      linkedin: 'https://www.linkedin.com/in/nataliavokrouhlecka/',
    },
    talk: {
      title: 'Programming for children - tips and tricks',
      abstract: `How to teach children programming? How to make sure that the children enjoy it, stay curious, creative and express themselves? Let's hear some tips from a developers who has been teaching children programming using Scratch and Ozobots. `,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'patrick-stapfer',
    name: 'Patrick Stapfer',
    img: '/big-party-v/img/speakers/patrick.jpg',
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
    id: 'li-hau-tan',
    name: 'Li Hau Tan',
    img: '/big-party-v/img/speakers/li-hau-tan.jpg',
    company: 'Shopee',
    jobTitle: 'Expert Engineer',
    country: 'SG, Singapore',
    about: `Originally from Malaysia, Li Hau is an expert engineer at Shopee, Svelte core member and Babel contributor. He is a polyglot. He speaks Chinese, English, Malay, JavaScript, CSS, and HTML. In his free time, he writes about JavaScript frameworks and tools.`,
    social: {
      twitter: 'https://twitter.com/lihautan',
      github: '',
      linkedin: 'https://www.linkedin.com/in/lihautan/',
    },
    talk: {
      title: '',
      abstract: ``,
      media: {
        slides: '',
        video: '',
      },
    },
  },
  {
    id: 'boyan-mihaylov',
    name: 'Boyan Mihaylov',
    img: '/big-party-v/img/speakers/boyan.jpg',
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
      title: 'Rockstar compilation to WebAssembly',
      abstract: `WebAssembly allows us to compile code in C/C++/Rust and run it in the browser with near-native performance. With time, more programming languages introduce such compilation support, which establishes WebAssembly as an universal intermediary language. In this talk, we will examine the compilation process to WebAssembly by using code written in one of the newest programming languages - Rockstar. We will go deeper into WebAssembly's architecture to see how it is designed to evolve in the future compared to JavaScript.`,
      media: {
        slides: '',
        video: '',
      },
    },
  },
]

export const Speakers = () => {
  const fullSpeakerCount = 10
  const allSpeakersAnnounced = DATA.length >= fullSpeakerCount
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <ul className="speaker-list">
        {DATA.map((item) => {
          return (
            <li key={item.id}>
              <PersonCard {...item} />
            </li>
          )
        })}
      </ul>
      {allSpeakersAnnounced ? null : (
        <p className="center">Stay tunned for more speaker announcements !</p>
      )}
    </>
  )
}
