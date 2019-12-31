import css from 'styled-jsx/css'
import { theme } from './theme'

export const styles = css.global`
  .sponsors {
    padding-top: 2vh;
    padding-bottom: 5vh;
    background: ${theme.colors.white};
    text-align: center;
  }
  .sponsors p {
    color: ${theme.colors.textLight};
    line-height: 1.4em;
  }
  .sponsors strong {
    color: ${theme.colors.textDark};
  }
  .sponsor-title {
    margin: 3rem 0 0;
    font-size: 1.3rem;
  }
  .sponsor-join {
    text-align: center;
    margin-top: 4rem;
  }
  .sponsor-join > .content-small {
    font-size: 0.9em;
  }

  .logos-list {
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

  .logo-list__item {
    flex-basis: 50%;
    width: 100%;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .logo-list__item {
      flex-basis: 33%;
    }
  }
  @media (min-width: ${theme.breakpoints.large}) {
    .logo-list__item {
      flex-basis: 25%;
    }
  }
  .sponsor-platinum {
    flex-basis: 75%;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .sponsor-platinum {
      flex-basis: 40%;
    }
  }
  @media (min-width: ${theme.breakpoints.large}) {
    .sponsor-platinum {
      flex-basis: 33%;
    }
  }

  .logo {
    display: block;
    padding: 1rem;
  }
  .logo > amp-img {
    padding: 1rem;
    flex: 1 1 auto;
    background: #fff;
    margin: 0 auto;
    filter: grayscale(100%);
    transition: filter 0.3s, transform 0.3s, box-shadow 0.2s ease;
  }
  .logo:hover > amp-img {
    filter: grayscale(0);
    transform: translate(10px, -6px);
    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.15);
  }
`
