import { styles } from './schedule.styles'

import * as data from './data'

const DATA: ScheduleItemModel[] = [
  {
    title: 'Registration',
    time: '0800',
  },
  {
    title: 'Opening Notes',
    time: '0900',
    speaker: {
      bio: [
        {
          fullName: 'Martin Hochel',
          company: 'ngParty',
          img: 'https://amp.dev/static/img/amp-conf/speakers/amp.png',
          link: '#martinhochel',
        },
        {
          fullName: 'Viliam Elischer',
          company: 'ngParty',
          img: 'https://amp.dev/static/img/amp-conf/speakers/amp.png',
          link: '#viliamelischer',
        },
      ],
      talk: 'Welcome to ngBigParty V!',
    },
  },
  {
    title: 'Keynote',
    time: '0915',
    speaker: {
      bio: [
        {
          fullName: 'Malte Ubl',
          company: 'Google',
          img: 'https://amp.dev/static/img/amp-conf/speakers/amp.png',
          link: '#malteubl',
        },
      ],
      talk: 'OMG',
    },
  },
  {
    title: 'Next generation UX of EC-Cube, powered by AMP',
    time: '1115',
    speaker: {
      bio: [
        {
          fullName: 'Balla Khadang',
          company: 'YouGov',
          img: 'https://amp.dev/static/img/amp-conf/speakers/amp.png',
          link: '#ballakhadang',
        },
        {
          fullName: 'Levi Clancy',
          company: 'Re:Coded',
          img: 'https://amp.dev/static/img/amp-conf/speakers/amp.png',
          link: '#leviclancy',
        },
      ],
      talk:
        'A PHP based CMS with more than 1.8M downloads and 30K+ live merchants, EC-CUBE now uses AMP to satisfy the UX of their end users. This session covers the journey of EC-CUBE AMPing their platform starting from converting existing Twig template to eventually making the site PWA using AMP. The general essence of how EC-CUBE adapted AMP into existing platform should be useful for not only CMSers but broader Web developers.',
    },
  },
  {
    title: 'Lunch',
    time: '1230',
  },
  {
    title: 'Next generation Dev',
    time: '1315',
    speaker: {
      bio: [
        {
          fullName: 'Balla Khadang',
          company: 'YouGov',
          img: 'https://amp.dev/static/img/amp-conf/speakers/amp.png',
          link: '#ballakhadang',
        },
      ],
      talk: `Too often, engineers view AMP as "just one more thing to implement." In reality, AMP provides engineers with a series of guiding principles that can help them deliver more performant websites—even when it comes to non-AMP pages. So, what would happen if teams began to think with an AMP Core Mindset? In this talk, we will explore AMP's core design principles and unpack how businesses can (and should!) incorporate these principles into all aspects of their decision making, in order to help teams align on goals and make better decisions at every level.`,
    },
  },
  {
    title: 'Next generation UX',
    time: '1415',
    speaker: {
      bio: [
        {
          fullName: 'Levi Clancy',
          company: 'Re:Coded',
          img: 'https://amp.dev/static/img/amp-conf/speakers/amp.png',
          link: '#leviclancy',
        },
      ],
      talk: `Introduce a journey of ‘cafe24’ from the early stage of its business to growing as a successful leading ecommerce platform. Describe a true meaning of AMP adaptation to ecommerce platform and how it could bring useful insights for the purpose of driving positive business change for both market and user from a platform provider point of view. Explain our e-commerce platform structure including the main CMS and the details of our AMP plugin along with the overall project in the presentation. Shows a demo to visualize a smooth AMP to AMP navigation and a visual comparison between non-AMP page and a pre rendered paired AMP page in WebPageTest. Lastly add comments on our next plan about leveraging AMP and key PWA technologies (which had been already launched and used by many of our merchants) in our business strategy as well as our upcoming plan in big picture.`,
    },
  },
  {
    title: 'Party!',
    time: '1900',
  },
]

interface ScheduleItemModel {
  title: string
  time: string
  keynote?: boolean
  speaker?: {
    bio: [ScheduleSpeakerBio] | ScheduleSpeakerBio[]
    talk: string
  }
}
interface ScheduleSpeakerBio {
  fullName: string
  company: string
  img: string
  link: string
}

export const Schedule = () => {
  const { config } = data

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      {config.enableSchedule ? (
        <div className="ap-o-agenda">
          <ul className="ap-o-agenda-content-list conf">
            {DATA.map((item) => {
              return <ScheduleItem key={item.title} {...item} />
            })}
          </ul>
        </div>
      ) : (
        <p className="center">
          Schedule is not ready yet. We're actively working on it! Stay tunned
        </p>
      )}
    </>
  )
}

const ScheduleItem = (props: ScheduleItemModel) => {
  const { time, title, keynote: isKeynote, speaker } = props
  const speakerBios = (speaker && speaker.bio) || []
  const speakerTalk = speaker ? speaker.talk : null
  const isSession = speakerBios.length > 0
  const isMultiple = speakerBios.length > 1

  const cx = {
    keynote: isKeynote ? 'keynote' : '',
    session: isSession ? 'session' : '',
    multiple: isMultiple ? 'multiple' : '',
  }

  return (
    <li className="ap-m-agenda-item">
      <div className="ap-m-agenda-item-speakers">
        {speakerBios.map((item) => {
          return (
            <amp-img
              key={item.fullName}
              className={`ap-m-agenda-item-image ${cx.multiple}`}
              alt={`Profile picture for ${item.fullName}`}
              src={item.img}
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          )
        })}
      </div>
      <div className="ap-m-agenda-item-time">{time}</div>
      <div
        className={`ap-m-agenda-item-description ${cx.session} ${cx.keynote}`}
      >
        <div
          className={`ap-m-agenda-item-description-title ${cx.session} ${cx.keynote}`}
        >
          {title}
        </div>

        {speakerBios.map((item, idx) => {
          return (
            <>
              <SpeakerLink
                key={item.fullName}
                link={item.link}
                fullName={item.fullName}
                company={item.company}
              />
              {isMultiple ? <br /> : null}
            </>
          )
        })}
        <div className="ap-m-agenda-item-description-text">{speakerTalk}</div>
      </div>
    </li>
  )
}

type SpeakerLinkProps = Omit<
  Required<Pick<ScheduleItemModel, 'speaker'>>['speaker']['bio'][number],
  'img'
>

const SpeakerLink = (props: SpeakerLinkProps) => {
  const { link, company, fullName } = props
  const formatedName = `${fullName}, ${company}`

  return (
    <a href={link} className="ap-m-agenda-item-description-speaker">
      {formatedName}
    </a>
  )
}
