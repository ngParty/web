import { data } from '../../shared'

export interface LinkModel {
  label: string
  link: string
}
export interface NavItemModel {
  main: LinkModel[]
  secondary: LinkModel[]
}

export const navigation: NavItemModel = {
  main: [
    {
      label: 'About',
      link: '#about',
    },
    {
      label: 'Speakers',
      link: '#speakers',
    },
    {
      label: 'Schedule',
      link: '#schedule',
    },
    {
      label: 'Supporters',
      link: '#supporters',
    },
    {
      label: 'Venue',
      link: '#venue',
    },
    {
      label: 'FAQ',
      link: '#faq',
    },
    {
      label: 'Organizers',
      link: '#organizers',
    },
  ],
  secondary: [
    {
      label: 'Tickets',
      link: '#tickets',
    },
    {
      label: 'News',
      link: '#news',
    },
  ],
}

const links = {
  tickets: 'http://bit.ly/ng-bigparty-v-tickets',
  ticketsInvoice: 'http://bit.ly/ng-bigparty-v-invoice-tickets',
}

const config = {
  enableSchedule: true,
  enableTickets: false,
}

export { data, config, links }
