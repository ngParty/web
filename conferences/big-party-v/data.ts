export interface LinkModel {
  label: string
  link: string
}
export interface NavItemModel extends LinkModel {}

export const navigation: NavItemModel[] = [
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
]
