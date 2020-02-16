import css from 'styled-jsx/css'
import { theme } from './theme'

export const styles = css.global`
  .headerbar {
    background: #fff;
    color: #021425;
    z-index: 999;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    left: 0;
    right: 0;
    top: 0;
    padding: 0 1rem;
    /* height: 3.5rem; */
  }

  .navbar-trigger {
    line-height: ${theme.sizes.headerHeight};
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .navbar-trigger {
      display: none;
    }
  }

  .headerbar-title {
    font: 300 1rem/1.4 Montserrat, arial, sans-serif;
    display: flex;
    align-items: center;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .headerbar-title {
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.6;
    }
  }

  .headerbar-title-logo:hover {
    box-shadow: 0px 0px 8px -2px black;
    transform: scale(1.5) translateX(0.75em);
  }
  .headerbar-title-logo {
    transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
    width: 2rem;
    margin-right: 0.25rem;
  }

  .headerbar-nav {
    display: none;
    flex: none;
    line-height: ${theme.sizes.headerHeight};
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .headerbar-nav {
      display: block;
      flex: 1;
    }
  }

  .headerbar-nav {
  }
  .nav-item__list {
    margin: 0;
    text-align: right;
    float: right;
  }
  .nav-item {
    transition: opacity 0.25s ease-out;
    padding: 0 0.5rem;
    background: transparent;
    opacity: 0.8;
    font-family: Verdana, sans-serif;
  }
  .nav-item:hover {
    opacity: 1;
  }
  @media (min-width: ${theme.breakpoints.large}) {
    .nav-item {
      text-transform: uppercase;
      padding: 0 0.75rem;
      letter-spacing: 0.05rem;
    }
  }

  .headerbar-action {
  }

  .headerbar-action-link {
    color: ${theme.colors.white};
    background: ${theme.colors.accent};
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: color ease-out 250ms, background ease-out 250ms,
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  .headerbar-action-link:visited {
    color: ${theme.colors.white};
  }
  .headerbar-action-link:hover,
  .headerbar-action-link:focus {
    color: ${theme.colors.accent};
    background: ${theme.colors.white};
    box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.25),
      inset 0 0 0px 1px ${theme.colors.accent};
  }
`

export const sidebarStyles = css.global`
  .sidebar {
    width: 300px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background: linear-gradient(45deg, #48525c, #29323c);
    color: ${theme.colors.white};
  }
  .sidebar-header {
    line-height: 3.5rem;
    min-height: 3.5rem;
  }

  .sidebar-nav {
    padding: 0;
    margin: 0;
  }

  .label {
    margin: 0;
    line-height: 2.0625;
    text-transform: uppercase;
  }
  .land-see-sidebar-nav-item {
    font-family: Montserrat, arial, sans-serif;
    font-size: 1.125rem;
    letter-spacing: 0.6px;
    line-height: 2.0625;
    text-transform: capitalize;
  }
  .sidebar .nav-item {
    margin: 0 0 0.5rem;
  }
  .nav a {
    cursor: pointer;
    text-decoration: none;
  }

  .sidebar-link,
  .sidebar-link:link,
  .sidebar-link:visited {
    text-decoration: none;
    color: #fff;
    transition: all 0.25s ease-out;
    line-height: 2.25em;
  }

  .sidebar-link:hover,
  .sidebar-link:focus {
    color: ${theme.colors.accent};
    text-decoration: none;
  }
`
