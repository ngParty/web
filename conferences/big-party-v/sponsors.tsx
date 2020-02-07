import { data as moduleData } from './data'
import { styles } from './sponsors.styles'

interface SponsorModel {
  name: string
  img: string
  link: string
  type: 'platinum' | 'gold' | 'silver' | 'bronze' | 'partner' | 'community'
}

const getImgPath = (img: string) => `/big-party-v/img/partners/${img}`

const data: SponsorModel[] = [
  {
    name: 'Socialbakers',
    img: getImgPath('socialbakers.svg'),
    link: 'https://www.socialbakers.com',
    type: 'gold',
  },
  {
    name: 'Applifting',
    img: getImgPath('applifting.svg'),
    link: 'https://www.applifting.cz',
    type: 'gold',
  },
  {
    name: 'JetBrains',
    img: getImgPath('jetbrains.svg'),
    link: 'https://www.jetbrains.com/',
    type: 'silver',
  },
  {
    name: 'Ataccama',
    img: getImgPath('ataccama.svg'),
    link: 'https://www.ataccama.com/',
    type: 'silver',
  },
  {
    name: 'Edupunk',
    img: getImgPath('edupunk.jpg'),
    link: 'https://edupunk.cz/',
    type: 'partner',
  },
  {
    name: 'Techtaboo',
    img: getImgPath('techtaboo.svg'),
    link: 'https://www.youtube.com/channel/UCJdX6oFnV6NH7SzKhmNZHDg',
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
    img: getImgPath('microsoft.svg'),
    link: 'https://www.microsoft.com',
    type: 'partner',
  },
  {
    name: 'Progress',
    img: getImgPath('progress.svg'),
    link: 'https://www.progress.com/',
    type: 'partner',
  },
  {
    name: 'e-spres-oh',
    img: getImgPath('e-spres-oh.svg'),
    link: 'https://www.e-spres-oh.com/',
    type: 'partner',
  },
  {
    name: 'Container solutions',
    img: getImgPath('container-solutions.svg'),
    link: 'https://www.container-solutions.com/',
    type: 'partner',
  },
  {
    name: 'Nrwl',
    img: getImgPath('nrwl.svg'),
    link: 'https://nrwl.io/',
    type: 'partner',
  },
  {
    name: 'Goout',
    img: getImgPath('goout.svg'),
    link: 'https://goout.net/',
    type: 'partner',
  },
  {
    name: 'Orea Hotels',
    img: getImgPath('orea.svg'),
    link: 'https://www.orea.cz/',
    type: 'partner',
  },
  {
    name: 'React Girls',
    img: getImgPath('reactgirls.svg'),
    link: 'https://www.reactgirls.com/',
    type: 'community',
  },
  {
    name: 'Tim.js',
    img: getImgPath('tim-js.svg'),
    link: 'https://www.meetup.com/tim-js/',
    type: 'community',
  },
  {
    name: 'JS Heroes',
    img: getImgPath('js-heroes.svg'),
    link: 'https://jsheroes.io',
    type: 'community',
  },
  {
    name: 'TSconf eu',
    img: getImgPath('tsconf-eu.svg'),
    link: 'https://tsconf.eu',
    type: 'community',
  },
  {
    name: 'Vue.js Prague',
    img: getImgPath('vue-prague.svg'),
    link: 'https://vuejs.cz/',
    type: 'community',
  },
  {
    name: 'LiveSport',
    img: getImgPath('livesport.svg'),
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
        <p>
          We are very grateful and proud of our awesome sponsors.
          <br />
          This community gathering wouldn’t be possible without them.
          <br />
          <strong>Thank you!</strong>
        </p>
        <SponsorList title="Platinum" data={sponsorByType.sponsors.platinum} />
        <SponsorList title="Gold" data={sponsorByType.sponsors.gold} />
        <SponsorList title="Silver" data={sponsorByType.sponsors.silver} />
        <SponsorList title="Bronze" data={sponsorByType.sponsors.bronze} />

        <div className="sponsor-join">
          <p>
            Would you like to support one of the best JavaScript community
            events in Czechia?
          </p>
          <p className="content-small">
            Supporting the conference is a great opportunity for you to present
            your company in front of the community.
          </p>
          <a
            className="btn"
            rel="noopener nofollow"
            target="_blank"
            href={becomeSponsorLink}
          >
            Become a premium partner
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
