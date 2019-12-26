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
  more: [
    {
      label: 'Brand materials',
      link: 'http://bit.ly/ngParty-brand-materials',
    },
  ],
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
  contact: {
    email: {
      link: 'mailto:ng@ngparty.cz',
      label: 'ng@ngparty.cz',
    },
  },
}
