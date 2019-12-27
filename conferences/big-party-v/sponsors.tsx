import { data as moduleData } from './data'
import { styles } from './sponsors.styles'

interface SponsorModel {
  name: string
  img: string
  link: string
  type: 'platinum' | 'gold' | 'silver' | 'bronze' | 'partner' | 'community'
}

const getImgPath = (img: string) => `/img/big-party-v/partners/${img}`

const data: SponsorModel[] = [
  {
    name: 'JetBrains',
    img: getImgPath('jetbrains.jpg'),
    link: 'https://www.jetbrains.com/',
    type: 'silver',
  },
  {
    name: 'Socialbakers',
    img: getImgPath('socialbakers.jpg'),
    link: 'https://www.socialbakers.com',
    type: 'gold',
  },
  {
    name: 'Edupunk',
    img: getImgPath('edupunk.jpg'),
    link: 'https://edupunk.cz/',
    type: 'partner',
  },
  {
    name: 'Reason Association',
    img: getImgPath('reason-association.jpg'),
    link: 'https://reason-association.org',
    type: 'partner',
  },
  {
    name: 'Microsoft',
    img:
      'https://revojs.ro/static/microsoft_logo-60d165cf89f3009a5efc5812682da17e.svg',
    link: 'https://www.microsoft.com',
    type: 'partner',
  },
  {
    name: 'Progress',
    img:
      'https://revojs.ro/static/progress_logo-1335a10f9cb65990ea338718d7d05c4e.svg',
    link: 'https://www.progress.com/',
    type: 'partner',
  },
  {
    name: 'React Girls',
    img: getImgPath('reactgirls.jpg'),
    link: 'https://www.reactgirls.com/',
    type: 'community',
  },
  {
    name: 'Tim.js',
    img: getImgPath('tim-js.jpg'),
    link: 'https://www.meetup.com/tim-js/',
    type: 'community',
  },
  {
    name: 'LiveSport',
    img: getImgPath('livesport.jpg'),
    link: 'https://www.livesport.eu/',
    type: 'platinum',
  },
]

const sponsorByType = {
  sponsors: {
    platinum: data.filter((item) => item.type === 'platinum'),
    gold: data.filter((item) => item.type === 'gold'),
    silver: data.filter((item) => item.type === 'silver'),
    bronze: data.filter((item) => item.type === 'bronze'),
  },
  partners: data.filter((item) => item.type === 'partner'),
  community: data.filter((item) => item.type === 'community'),
}

export const Sponsors = () => {
  const becomeSponsorLink = `${moduleData.links.contact.email.link}?subject=ngBigParty V - Partnership request&body=Hey ngParty Team! We'd like to become a partner of your community conference. Can you provide more more info for us? Cheers, <Company Name>`
  return (
    <>
      <style jsx global>
        {styles}
      </style>

      <div className="sponsors">
        <SponsorList
          title="Platinum Sponsor"
          data={sponsorByType.sponsors.platinum}
        />
        <SponsorList title="Gold Sponsor" data={sponsorByType.sponsors.gold} />
        <SponsorList
          title="Silver Sponsor"
          data={sponsorByType.sponsors.silver}
        />
        <SponsorList
          title="Bronze Sponsor"
          data={sponsorByType.sponsors.bronze}
        />

        <div className="sponsor-join">
          <a
            className="btn btn--secondary"
            rel="noopener"
            target="_blank"
            href={becomeSponsorLink}
          >
            Become a sponsor
          </a>
        </div>
      </div>

      <SponsorList title="Partners" data={sponsorByType.partners} />

      <SponsorList title="Communities" data={sponsorByType.community} />
    </>
  )
}

const SponsorList = (props: { title: string; data: SponsorModel[] }) => {
  const { data, title } = props
  const itemCount = data.length
  const isPlatinum = itemCount === 1 && data[0].type === 'platinum'

  const css = {
    root: `logos-list`,
    list: `logo-list__item ${isPlatinum ? 'sponsor-platinum' : ''}`,
  }

  return itemCount ? (
    <section>
      <h2 className="sponsor-title">{title}</h2>
      <ul className={css.root}>
        {data.map((item, idx) => {
          return (
            <li className={css.list} key={idx}>
              <SponsorItem {...item} />
            </li>
          )
        })}
      </ul>
    </section>
  ) : null
}
const SponsorItem = (props: SponsorModel) => {
  const { img, link, name: companyName } = props
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="logo">
      <amp-img
        className="logo__img"
        alt={companyName}
        layout="responsive"
        width="200"
        height="200"
        src={img}
      ></amp-img>
    </a>
  )
}
