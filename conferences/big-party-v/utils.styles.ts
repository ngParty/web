import css from 'styled-jsx/css'

import { theme } from './theme'

export const stylesUtils = css.global`
  .fixed {
    position: fixed;
  }

  .flex {
    display: flex;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .items-center {
    align-items: center;
  }

  .inline-block {
    display: inline-block;
  }

  .text-decoration-none {
    text-decoration: none;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .list-reset {
    list-style: none;
    padding-left: 0;
  }
  .nowrap {
    white-space: nowrap;
  }
  .center {
    text-align: center;
  }
  .text-light {
    color: ${theme.colors.textLight};
  }
  .text-dark {
    color: ${theme.colors.textDark};
  }
`
