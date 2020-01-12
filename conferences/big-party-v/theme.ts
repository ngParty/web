const colors = {
  border: '#005af0',
  title: '#20202a',
  link: '#f56c64',
  primary: '#212158',
  secondary: '',
  accent: '#3fea90',
  bgDark: '#15161a',
  lightGrey: '#dadce1',
  textDark: '#30343a',
  textLight: '#979da7',
  white: '#fff',
  black: '#000',
}
const shadow = {
  main: '0 15px 25px 0 rgba(0, 0, 0, 0.15)',
}

const breakpoints = {
  small: '576px',
  medium: `${768 + 1}px`,
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1600px',
}

const sizes = {
  headerHeight: '3.5rem',
  widthContent: '750px',
  maxWidthContent: '1440px',
}

const mixins = {
  centerMaxWidth(maxWidth = '75%') {
    return `
      margin: 0 auto;
      max-width: ${maxWidth};
  `
  },
}

export const theme = {
  colors,
  breakpoints,
  sizes,
  shadow,
  mixins,
}
