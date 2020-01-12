import { Fragment } from 'react'

import * as data from './data'
import { styles } from './schedule.styles'
import { Fragment } from 'react'

const imgPlaceholder = '/big-party-v/meta/apple-touch-icon.png'
const DATA: ScheduleItemModel[] = [
  {
    title: 'Registration',
    time: '0800',
  },
  {
    title: 'Welcome keynote',
    time: '0900',
    speaker: {
      bio: [
        {
          fullName: 'Martin Hochel',
          company: 'ngParty',
          img: '',
          link: '#martinhochel',
        },
        {
          fullName: 'Viliam Elischer',
          company: 'ngParty',
          img: '',
          link: '#viliamelischer',
        },
        {
          fullName: 'Mario Vejlupek',
          company: 'ngParty',
          img: '',
          link: '#mariovejlupek',
        },
      ],
      talk: 'Welcome to ngBigParty V!',
    },
  },
  {
    title: 'Talk 1',
    time: '0915',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Talk 2',
    time: '0940',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Coffee Break',
    time: '1000',
  },
  {
    title: 'Talk 3',
    time: '1030',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Talk 4',
    time: '1055',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Lunch',
    time: '1130',
  },
  {
    title: 'Lightning/Ingnite Talks',
    time: '1300',
  },
  {
    title: 'Talk 5',
    time: '1330',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Talk 6',
    time: '1355',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Coffee Break',
    time: '1420',
  },
  {
    title: 'Talk 7',
    time: '1450',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Talk 8',
    time: '1515',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Coffee Break',
    time: '1540',
  },
  {
    title: 'Talk 9',
    time: '1610',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Talk 10',
    time: '1635',
    speaker: {
      bio: [
        {
          fullName: '',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'Closing Words',
    time: '17:00',
    speaker: {
      bio: [
        {
          fullName: 'ngParty',
          company: '',
          img: '',
          link: '#',
        },
      ],
      talk: '',
    },
  },
  {
    title: 'After (ng)Party!',
    time: '1730',
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
        <>
          <p className="center text-light">
            Schedule is not final yet. We'll let you know when it's final. Stay
            tunned!
          </p>

          <div className="agenda">
            <ul className="agenda-content-list conf">
              {DATA.map((item) => {
                return <ScheduleItem key={item.title} {...item} />
              })}
            </ul>
          </div>
        </>
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
    <li className="agenda-item">
      <div className="agenda-item-speakers">
        {speakerBios.map((item) => {
          return (
            <amp-img
              key={item.fullName}
              className={`agenda-item-image ${cx.multiple}`}
              alt={`Profile picture for ${item.fullName}`}
              src={item.img || imgPlaceholder}
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          )
        })}
      </div>
      <div className="agenda-item-time">
        <Time time={time} />
      </div>
      <div className={`agenda-item-description ${cx.session} ${cx.keynote}`}>
        <div
          className={`agenda-item-description-title ${cx.session} ${cx.keynote}`}
        >
          {title}
        </div>

        {speakerBios.map((item, idx) => {
          return (
            <Fragment key={item.fullName}>
              <SpeakerLink
                key={item.fullName}
                link={item.link}
                fullName={item.fullName}
                company={item.company}
              />
              {isMultiple ? <br /> : null}
            </Fragment>
          )
        })}
        <div className="agenda-item-description-text">{speakerTalk}</div>
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
  const formatedName = fullName ? `${fullName}, ${company}` : ''

  return (
    <a href={link} className="agenda-item-description-speaker">
      {formatedName}
    </a>
  )
}

const Time = (props: { time: string }) => {
  const { time } = props
  return <>{formatTime(time)}</>

  function formatTime(value: string) {
    return value.replace(/(\d{2})(\d{2})/, (match, p1, p2) => {
      return `${p1}:${p2}`
    })
  }
}
