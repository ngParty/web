import css from 'styled-jsx/css'
import { theme } from './theme'

export const styles = css.global`
  .organizers {
    margin: 0 auto;
    /* max-width: 50%; */
  }
  .organizer-section {
    font-size: 1.125rem;
    line-height: 1.6rem;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .organizer-section {
      padding: 1rem;
      display: flex;
      align-items: center;
    }
  }

  .organizer-logo {
    display: inline-block;
    margin: 1rem 0 0;
    width: auto;
    height: 100%;
    box-shadow: 0px -1px 20px 5px rgba(0, 0, 0, 0.25);
  }
  .organizer-logo svg {
    display: block;
    height: 5em;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .organizer-logo {
      margin-right: 2rem;
    }
    .organizer-logo svg {
      display: block;
      height: 10em;
    }
  }

  .organizer-bio a {
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.accent};
    font-weight: 700;
    transition: all 0.25s ease-out;
    position: relative;
  }
  .organizer-bio a::before {
    content: '>';
    color: ${theme.colors.accent};
    font-weight: bold;
    position: absolute;
    transform: translate(1em, 0);
    visibility: hidden;
  }

  .organizer-bio a:hover {
    padding-left: 1em;
  }
  .organizer-bio a:hover::before {
    visibility: visible;
    transform: translate(-0.75em, 0);
  }

  .organizer-tags {
    word-break: break-all;
    font-weight: bold;
  }
`
