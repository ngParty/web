import { data as sharedData } from '../shared'
export const data = {
  navigation: [
    {
      title: '',
      upcoming: true,
      label: 'ngBigParty V',
      link: '/big-party-v',
    },
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
  ],
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
}
