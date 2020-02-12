const links = {
  contact: {
    email: {
      link: 'mailto:ng@ngparty.cz',
      label: 'ng@ngparty.cz',
    },
  },
  more: [
    {
      label: 'Code of Conduct',
      link: 'https://github.com/ngParty/web/blob/master/COC.md',
    },
    {
      label: 'Press Kit',
      link: 'http://bit.ly/ngParty-brand-materials',
    },
  ],
}

const currentYear = new Date().getFullYear()

export const data = {
  links,
  currentYear,
}
