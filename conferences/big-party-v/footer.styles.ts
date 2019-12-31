import css from 'styled-jsx/css'
import { theme } from './theme'

export const styles = css.global`
  .footer {
    padding: 3em 15px 2em;
    line-height: 1.6rem;
    font-weight: 400;
    font-size: 0.8125rem;
    color: #fff;
    background: linear-gradient(45deg, #48525c, #29323c);
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .footer {
      padding-left: 7vw;
      padding-right: 7vw;
    }
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    .footer nav {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .internal-links {
    margin-bottom: 5em;
  }
  @media (min-width: 768px) {
    .internal-links {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .footer-menu {
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-weight: 500;
    letter-spacing: 0.05rem;
    font-family: Inconsolata, Verdana, sans-serif;
  }

  .footer-menu:not(:first-child) {
    margin-top: 1em;
    border-top: 1px solid hsla(0, 0%, 100%, 0.1);
    padding-top: 1em;
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    .footer-menu:not(:first-child) {
      margin-top: initial;
      border-top: none;
      padding-top: initial;
      padding-left: 5em;
    }
  }
  .footer-menu a,
  .footer-menu a:link,
  .footer-menu a:visited {
    text-decoration: none;
    color: #fff;
    transition: all 0.25s ease-out;
    line-height: 2.25em;
  }

  .footer-menu a:hover,
  .footer-menu a:focus {
    color: ${theme.colors.accent};
    text-decoration: none;
  }

  .external-links {
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .external-links {
      text-align: right;
    }
  }

  .social-media {
    margin-bottom: 1em;
  }
  .social-media__icon {
  }
  .social-media a {
    display: inline-block;
    transition: all 0.25s ease-out;
    padding: 0.5rem;
    background: #fff;
    line-height: 1em;
    border-radius: 50%;
  }
  .social-media a:not(:last-child) {
    margin-right: 1em;
  }
  .social-media a:hover,
  .social-media a:focus {
    transform: scale(1.2);
  }

  .footer-email {
    color: ${theme.colors.accent};
    text-decoration: none;
    font-weight: 700;
  }

  .copyright {
    font-size: 0.7rem;
    margin-top: 4em;
  }

  .ng-party-text {
    color: ${theme.colors.accent};
  }
`
