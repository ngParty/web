import { data } from '../shared'
export const DATA = {
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
  ],
  more: data.links.more,
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
  contact: data.links.contact,
}
