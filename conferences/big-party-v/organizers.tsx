import { Fragment } from 'react'

import { NgPartyIcon } from '../../components'
import { links } from '../../shared'

import { LinkModel } from './data'
import { PersonCard, OrganizerModel } from './shared'
import { styles } from './organizers.styles'

const DATA: OrganizerModel[] = [
  {
    id: 'martin-hochel',
    name: 'Martin Hochel',
    role: ['founder', 'organizer'],
    img: '/big-party-v/img/organizers/martin.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/hochelmartin/',
      twitter: 'https://twitter.com/martin_hotell',
      github: '',
    },
  },
  {
    id: 'tereza-vanek',
    name: 'Tereza Vaňková',
    role: ['organizer'],
    img: '/big-party-v/img/organizers/tereza.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/tereza-vaňková-a02966165',
      twitter: 'https://twitter.com/VanekTereza',
      github: '',
    },
  },
  {
    id: 'viliam-elischer',
    name: 'Viliam Elischer',
    role: ['founder', 'organizer'],
    img: '/big-party-v/img/organizers/viliam.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/viliamelischer/',
      twitter: 'https://twitter.com/vireliam',
      github: '',
    },
  },
  {
    id: 'mario-vejlupek',
    name: 'Mario Vejlupek',
    role: ['founder'],
    img: '/big-party-v/img/organizers/mario.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/elmariofredo/',
      twitter: 'https://twitter.com/mariovejlupek',
      github: '',
    },
  },
]

const foundersData: LinkModel[] = DATA.filter((item) =>
  item.role.includes('founder')
).map((item) => {
  return {
    label: item.name,
    link: item.social.linkedin,
  }
})

export const Organizers = () => {
  return (
    <div className="organizers">
      <style jsx global>
        {styles}
      </style>
      <section className="organizer-section">
        <h3 className="organizer-logo">
          <a href={links.home()}>
            <NgPartyIcon />
          </a>
        </h3>
        <div className="organizer-bio">
          <p>
            Founded in 2015, <a href={links.home()}>ngParty</a> is the local
            independent Next Generation development Community group in Prague,
            committed to encourage, inspire and share JavaScript knowledge among
            its members. <br />
            <code className="organizer-tags" aria-label="ngParty tags">
              #JavaScript, #ForCommunityByCommunity, #devsUnited
            </code>
          </p>
          <div>
            <h5>Founding members:</h5>

            {foundersData.map((item, idx) => {
              const isLast = idx === foundersData.length - 1
              return (
                <Fragment key={idx}>
                  <a href={item.link} target="_blank" rel="noreferrer nofollow">
                    {item.label}
                  </a>
                  {isLast ? '' : ', '}
                </Fragment>
              )
            })}
          </div>
        </div>
      </section>
      <section className="organizer-team-section">
        <OrganizersTeam />
      </section>
    </div>
  )
}

const OrganizersTeam = () => {
  return (
    <>
      <h2 className="center text-light">Meet the team</h2>
      <ul className="speaker-list">
        {DATA.map((item) => {
          return (
            <li key={item.id}>
              <PersonCard {...item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
