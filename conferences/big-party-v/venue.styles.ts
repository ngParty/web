import css from 'styled-jsx/css'

import { theme } from './theme'

export const styles = css.global`
  .conf-location {
    background: ${theme.colors.accent};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .conf-location {
      justify-content: space-around;
    }
  }

  .conf-location-visual {
    width: 100%;
    padding: 40px;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .conf-location-visual {
      padding: 40px 0;
      width: 40%;
    }
  }

  .conf-location-headline {
    color: #fff;
  }

  .conf-location-map,
  .conf-speaker:hover .ap-m-conf-speaker-image {
    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.15);
  }

  .conf-location-content {
    width: 100%;
    padding: 0 40px 20px;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .conf-location-content {
      width: 40%;
      /* margin-top: 7em; */
      padding: 3rem 0;
    }
  }

  .conf-location-content-link {
    margin-top: 1.5rem;
    margin-bottom: 0.75em;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    line-height: 1.2em;
    font-size: 1.2rem;
    color: #fff;
  }

  .conf-location-content-text {
    line-height: 1.6rem;
    font-weight: 400;
    color: #fff;
  }
`
