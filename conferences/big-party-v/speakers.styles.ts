import css from 'styled-jsx/css'

import { theme } from './theme'

export const styles = css.global`
  .speakers {
  }
  .speaker-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .speaker-list > li {
    flex: 1 1 auto;
    /* background-color: ${theme.colors.bgDark}; */
    padding: 0 7vw 4vw;
    margin-top: 1rem;
    width: 100%;
  }
  @media(min-width: ${theme.breakpoints.medium}){
    .speaker-list > li {
      max-width: 50%;
      padding: 0 2vw 4vw;
    }
  }
`
