import { styles } from './footer.styles'
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  FacebookIcon,
} from '../../components'
import { navigation, LinkModel, data } from './data'

const dataConferences: LinkModel[] = [
  {
    label: 'ngBigParty IV',
    link: '/big-party-iv',
  },
  {
    label: 'ngBigParty III',
    link: 'https://www.meetup.com/ngParty/events/231965205/',
  },
  {
    label: 'ngBigParty II',
    link: 'https://www.meetup.com/ngParty/events/228604044/',
  },
  {
    label: 'ngBigParty I',
    link: 'https://www.eventbrite.com/e/ngbigparty-tickets-18241722483#',
  },
]

const dataSocial: LinkModel[] = [
  {
    label: 'twitter',
    link: 'https://twitter.com/ngPartyCz',
  },
  {
    label: 'facebook',
    link: 'https://www.facebook.com/ngpartycz',
  },
  {
    label: 'github',
    link: 'https://github.com/ngParty',
  },
  {
    label: 'linkedin',
    link: 'https://www.linkedin.com/company/ngparty',
  },
]
const dataMore: LinkModel[] = data.links.more
const dataEmail = data.links.contact.email

export const Footer = () => {
  return (
    <footer className="footer">
      <style jsx global>
        {styles}
      </style>
      <nav>
        <div className="internal-links">
          <FooterNavigationItem data={navigation} />
          <FooterNavigationItem data={dataMore} />
          <FooterNavigationItem data={dataConferences} />
        </div>
        <div className="external-links">
          <div className="social-media">
            {dataSocial.map((item) => {
              return <SocialLink key={item.label} {...item} />
            })}
          </div>
          <a href={dataEmail.link} className="footer-email">
            {dataEmail.label}
          </a>
        </div>
      </nav>
      <Copyright year={String(data.currentYear)} />
    </footer>
  )
}

const FooterNavigationItem = (props: { data: LinkModel[] }) => {
  const { data } = props
  return (
    <ul className="footer-menu list-reset">
      {data.map((item) => {
        return (
          <li key={item.label}>
            <a href={item.link}>{item.label}</a>
          </li>
        )
      })}
    </ul>
  )
}

const socialIconsMap = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  github: GithubIcon,
  linkedin: LinkedInIcon,
}
type SocialIconTypes = keyof typeof socialIconsMap
const SocialLink = (props: LinkModel) => {
  const { label, link } = props
  const Icon = socialIconsMap[label as SocialIconTypes]

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon width={24} />
    </a>
  )
}

const Copyright = (props: { year: string }) => {
  const { year } = props
  return (
    <p className="copyright">
      &copy; <span className="ng-party-text">ngParty</span> {year}. All rights
      reserved.
    </p>
  )
}
