import css from 'styled-jsx/css'

import { theme } from './css-variables'

export const styles = css.global`
  .section {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: ${theme.sizes.maxWidthContent};
    padding: 0 15px;
    margin: 0 auto 50px;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .section {
      padding: 0 30px;
    }
  }

  .section-title {
    line-height: 1.6rem;
    font-weight: 400;
    color: #48525c;
    font-size: 1.125rem;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .section-title {
      margin-left: 10rem;
    }
  }

  .section-content {
    width: 100%;
    flex: 1 1 auto;
  }
`
