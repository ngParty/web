import { styles } from './footer.styles'
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  FacebookIcon,
} from '../../components'
import { navigation, NavItemModel } from './data'

const DATA: NavItemModel[] = [
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
interface SocialLinkModel<T extends string = string> {
  label: T
  link: string
}
const dataSocial: SocialLinkModel[] = [
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
    link: 'https://twitter.com/ngPartyCz',
  },
  {
    label: 'linkedin',
    link: 'https://www.linkedin.com/company/ngparty',
  },
]
const dataEmail = {
  link: 'mailto:ng@ngparty.cz',
  label: 'ng@ngparty.cz',
}

export const Footer = () => {
  return (
    <footer className="footer">
      <style jsx global>
        {styles}
      </style>
      <nav>
        <div className="internal-links">
          <ul className="footer-menu list-reset">
            {navigation.map((item) => {
              return (
                <li key={item.label}>
                  <a href={item.link}>{item.label}</a>
                </li>
              )
            })}
          </ul>
          <ul className="footer-menu list-reset">
            <li>
              <a href="https://confcodeofconduct.com/">Code of Conduct</a>
            </li>
            <li>
              <a href="/blog/">Blog</a>
            </li>
          </ul>
          <ul className="footer-menu list-reset">
            {DATA.map((item) => {
              return (
                <li key={item.label}>
                  <a href={item.link}>{item.label}</a>
                </li>
              )
            })}
          </ul>
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
      <CopyRight year="2019" />
    </footer>
  )
}

const socialIconsMap = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  github: GithubIcon,
  linkedin: LinkedInIcon,
}
type SocialIconTypes = keyof typeof socialIconsMap

const SocialLink = (props: SocialLinkModel) => {
  const { label, link } = props
  const Icon = socialIconsMap[label as SocialIconTypes]

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon width={24} />
    </a>
  )
}

const CopyRight = (props: { year: string }) => {
  const { year } = props
  return (
    <p className="copyright">
      &copy; <span className="ng-party-text">ngParty</span> {year}. All rights
      reserved.
    </p>
  )
}
