import { Fragment } from 'react'

import { NgPartyIcon } from '../../components'
import { styles } from './organizers.styles'
import { LinkModel } from './data'

const DATA: LinkModel[] = [
  {
    label: 'Martin Hochel',
    link: 'https://www.linkedin.com/in/hochelmartin/',
  },
  {
    label: 'Mario Vejlupek',
    link: 'https://www.linkedin.com/in/elmariofredo/',
  },
  {
    label: 'Viliam Elischer',
    link: 'https://www.linkedin.com/in/viliamelischer/',
  },
]
export const Organizers = () => {
  return (
    <div className="organizers">
      <style jsx global>
        {styles}
      </style>
      <section className="organizer-section">
        <h3 className="organizer-logo">
          <a href="//ngparty.cz">
            <NgPartyIcon />
          </a>
        </h3>
        <div className="organizer-bio">
          <p>
            Founded in 2015, <a href="//ngparty.cz">ngParty</a> is the local
            independent Next Generation development Community group in Prague,
            committed to encourage, inspire and share JavaScript knowledge among
            its members. <br />
            <code className="organizer-tags">
              #JavaScript, #byCommunityForCommunity, #devsUnited!
            </code>
          </p>
          <p className="organizer-bio">
            <h5>Founding members:</h5>

            {DATA.map((item, idx) => {
              const isLast = idx === DATA.length - 1
              return (
                <Fragment key={idx}>
                  <a href={item.link} target="_blank" rel="noreferrer nofollow">
                    {item.label}
                  </a>
                  {isLast ? '' : ', '}
                </Fragment>
              )
            })}
          </p>
        </div>
      </section>
    </div>
  )
}
