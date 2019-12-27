import css from 'styled-jsx/css'

import { theme } from './theme.styles'

export const styles = css.global`
  .page {
  }
  .screen {
    min-height: 100vh;
  }

  .wrapper {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    width: var(--ng-page-width-with-margin);
    padding-left: var(--ng-page-margin);
    padding-right: var(--ng-page-margin);
  }
  .wrapper-dark {
    color: var(--ng-background);
    background-color: var(--ng-foreground);
  }

  .container {
    display: flex;
  }
  .flex {
    display: flex;
  }
  .align-center {
    align-items: center;
  }

  .hero {
    flex-flow: column;
    padding: var(--ng-gap-big-half) 0;
  }
  .hero > * {
    width: 100%;
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    .hero {
      flex-flow: row;
      justify-content: center;
      padding: var(--ng-gap-big) 0;
    }
    .hero > * {
      width: 50%;
    }
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    padding: var(--ng-page-margin);
  }
  @media (min-width: ${theme.breakpoints.mobile}) {
    .logo-container {
      align-items: flex-end;
    }
  }
  .logo {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 7ch;
    max-height: 7ch;
    margin: 0;
    box-shadow: var(--shadow-logo);
  }
  .logo > svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .brand-title {
    margin: 0.25em 0 0;
    font-size: 2em;
    font-weight: 200;
    text-align: center;
  }
  @media (min-width: ${theme.breakpoints.mobile}) {
    .brand-title {
      text-align: right;
    }
  }
  .brand-title small {
    font-size: 0.25em;
    color: var(--accents-5);
    display: block;
    margin-top: 0.25em;
    width: 100%;
  }

  .nav {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: var(--ng-page-margin);
    font-size: 2rem;
    line-height: 1.5em;
    text-align: center;
  }
  @media (min-width: ${theme.breakpoints.mobile}) {
    .nav {
      align-items: flex-start;
      text-align: left;
    }
  }
  .nav ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  .nav a {
    display: inline-block;
    padding: 0px 10px;
    line-height: 1.4em;
    font-size: 1em;
    color: var(--accents-5);
    text-decoration: none;
    transition: color 0.2s ease 0s, opacity 0.25s ease-in-out,
      transform 0.25s ease-out;
  }
  .nav a:hover {
    color: var(--ng-foreground);
    transform: translateX(1ch);
  }
  .nav a::before {
    content: '_';
    transition: color 0.2s ease 0s, opacity 0.25s ease-in-out,
      transform 0.25s ease-out;
    opacity: 0;
    transform: translateX(-1ch);
  }
  .nav a:hover::before {
    opacity: 1;
    transform: translateX(0ch);
  }

  .about {
    font-size: 1.5rem;
    line-height: 1.75em;
    letter-spacing: 0.025rem;
    padding: var(--ng-gap-big-half) 0;
  }
  @media (min-width: ${theme.breakpoints.mobile}) {
    .about {
      padding: var(--ng-gap-big) 0;
    }
  }
  .about > p {
    margin: 1rem auto 0;
  }
  .about > p:first-child {
    margin-top: 0;
  }

  /* FOOTER */

  .footer {
    background: var(--accents-1);
    border-top: 1px solid var(--accents-2);
  }

  .footer-links {
    display: block;
    padding: 30px;
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    .footer-links {
      display: flex;
      justify-content: left;
      padding: 50px 30px 0;
      width: 1060px;
      max-width: 100%;
      margin: auto;
    }
  }

  .footer-navigation {
    padding: 0;
    list-style: none;

    margin: 0 0 20px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--accents-2);
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    .footer-navigation {
      margin: 0 95px 0 0;
      padding-bottom: 0;
      border: none;
    }
  }
  .footer-navigation li {
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    vertical-align: middle;
  }
  .footer-navigation li > a {
    margin-right: 15px;
    height: 20px;
    display: inline-block;
    overflow: auto;
    color: var(--accents-5);
    text-decoration: none;
    font-size: 14px;
    transition: all 0.2s ease;
  }
  .footer-navigation li > a:hover {
    color: var(--ng-foreground);
  }
  .footer-navigation-title {
    color: var(--ng-foreground);
    font-size: 14px;
  }

  /* ======================== */
  /*  */
  /* ======================== */

  .footer-wrapper {
    padding: 20px 30px 40px 30px;
    display: block;
    width: 100%;

    max-width: 100%;
    margin: auto;
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    .footer-wrapper {
      width: 1060px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px 30px;
    }
  }
  .footer-wrapper-left {
    display: flex;
    justify-content: center;
    align-self: flex-end;
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    .footer-wrapper-left {
      /* justify-content: initial; */
    }
  }
  .footer-wrapper-right {
    flex-grow: 2;
    text-align: center;
    line-height: 22px;

    color: var(--accents-5);
    font-size: 12px;
  }
  .footer-wrapper-right a {
    color: var(--accents-5);
    text-decoration: none;
    font-size: 12px;
    transition: all 0.2s ease;
  }
  .footer-wrapper-right a:hover {
    color: var(--ng-foreground);
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    .footer-wrapper-right {
      text-align: right;
      line-height: initial;
    }
  }

  .logotype {
    margin-bottom: 30px;
    margin-right: 0;
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    .logotype {
      text-align: center;
      margin-right: 40px;
      margin-bottom: 0;
    }
  }

  .footer-contact {
    vertical-align: middle;
    margin: 0 0 20px 0;
  }

  .footer-social {
    display: block;
    margin: 0 0 20px;
    padding: 0;
    list-style: none;
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    .footer-social {
      display: inline-flex;
      margin: 0;
      vertical-align: middle;
    }
  }
  .footer-social > li {
    display: inline-flex;
    margin-right: 15px;
    border-right: 1px solid var(--accents-2);
    padding-right: 15px;
  }
  .footer-social > li:last-child {
    border-right: none;
    margin-right: 0;
    padding-right: 0;
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    .footer-social > li:last-child {
      margin-right: 15px;
      border-right: 1px solid var(--accents-2);
      padding-right: 15px;
    }
  }

  .footer-social a {
    display: inline-block;
    height: 2em;
    width: 2em;
    opacity: 0.4;
    transition: opacity 300ms;
  }
  .footer-social a:hover {
    opacity: 1;
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    /* margin-right: 40px;
    text-align: center; */
  }
`
