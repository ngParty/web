import { data as sharedData } from '../shared'

interface NavigationItem {
  label: string
  link: string
  /**
   * flag to highligh menu item with accent color
   */
  upcoming?: string
}

const getImgPath = (img: string) => `/img/${img}`

export const data = {
  navigation: [
    {
      label: 'Meetups',
      link: '//meetup.com/ngparty',
    },
    {
      label: 'Conferences',
      link: '/big-party-v',
    },
    {
      label: 'Workshops',
      link: '//meetup.com/ngparty',
    },
    {
      label: 'Open Source',
      link: '//github.com/ngparty',
    },
  ] as NavigationItem[],
  more: sharedData.links.more,
  social: [
    {
      id: 'twitter',
      label: 'Twitter',
      link: '//twitter.com/ngpartycz',
    },
    {
      id: 'github',
      label: 'Github',
      link: '//github.com/ngparty',
    },
  ] as const,
  contact: sharedData.links.contact,
  currentYear: sharedData.currentYear,
  sponsors: {
    livesport: {
      name: 'LiveSport',
      img: getImgPath('partners/livesport.svg'),
      link: 'https://www.livesport.eu/',
    },
  },
}
