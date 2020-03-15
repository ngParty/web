import css from 'styled-jsx/css'
import { theme } from './theme'

export const styles = css`
  .news {
    line-height: 1.6em;
  }
  @media (min-width: ${theme.breakpoints.large}) {
    .news {
      margin: 0 auto;
      max-width: 75%;
    }
  }
`
