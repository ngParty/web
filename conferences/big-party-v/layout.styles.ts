import css from 'styled-jsx/css'
import { theme } from './theme'

const bgImage = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768"><defs><linearGradient id="a" x1="239.67" y1="855.23" x2="606.28" y2="-152.04" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="%23fff" stop-opacity="0"/><stop offset="1" stop-color="%23EDEDF1"/></linearGradient></defs><g><path fill="url(%23a)" d="M0 0h1024v214L786.37 768H0V0z"/></g></svg>`
const svgImg = (svg: string) => `data:image/svg+xml;utf8,${svg}`

export const styles = css.global`
  html,
  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  :target::before {
    content: '';
    display: block;
    visibility: hidden;
    height: 120px;
    margin-top: calc(-120px + ${theme.sizes.headerHeight});
  }

  a,
  a:active,
  a:visited {
    color: inherit;
  }
  /* @media print {
    a::after {
      content: " (" attr(href) ") ";
    }
  } */

  body {
    font-family: 'Roboto', sans-serif;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: top right;
    background-attachment: fixed;
    background-image: url('${svgImg(bgImage)}');
  }
`

const foo = css.global`
  .content {
    margin: auto;
  }

  @media (min-width: ${theme.breakpoints.large}) {
    .content {
      font-size: 1.5rem;
      max-width: ${theme.sizes.widthContent};
    }
  }

  .content--centered {
    margin: 0 auto;
  }
`
