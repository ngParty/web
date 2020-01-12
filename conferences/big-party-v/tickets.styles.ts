import css from 'styled-jsx/css'
import { theme } from './theme'

const sizes = {
  bigFont: '1.875rem',
  smallFont: '0.875rem',
}

const mixins = {
  gray: `
    color: ${theme.colors.textDark};
    background-color: ${theme.colors.lightGrey};
    `,
}

export const styles = css.global`
  .tickets {
  }
  @media (min-width: ${theme.breakpoints.large}) {
    .tickets {
      ${theme.mixins.centerMaxWidth()}
    }
  }

  .ticket-list {
    list-style: none;
    padding-left: 0;
  }
  .ticket-list li:not(:first-child) {
    margin-top: 2rem;
  }

  .ticket {
    padding: 1.25rem;
    background-color: ${theme.colors.bgDark};
    color: ${theme.colors.lightGrey};
    transition: box-shadow 250ms ease-out;
  }
  .ticket:not(.disabled):hover {
    box-shadow: ${theme.shadow.main};
  }
  .ticket.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
    ${mixins.gray}
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket {
      display: flex;
      padding: 0;
    }
    .ticket > .ticket-description {
      flex: 1;
    }
  }

  .ticket-type {
    font-size: ${sizes.bigFont};
    color: ${theme.colors.accent};
    padding-bottom: 0.25em;
    border-bottom: 1px solid ${theme.colors.textLight};
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-type {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1em;
      border-bottom: none;
      border-right: 1px solid ${theme.colors.textLight};
    }
  }

  .ticket-title {
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-title {
      width: calc(6 * ${sizes.bigFont});
    }
  }
  .ticket-date {
    font-size: ${sizes.smallFont};
  }

  .ticket-description {
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-description {
      align-items: center;
      display: flex;
      padding: 1em;
      ${mixins.gray}
    }
  }

  .ticket-action {
    text-align: center;
    text-transform: uppercase;
    margin-top: 1.5rem;
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
  .ticket-action.disabled {
    font-size: ${sizes.bigFont};
    padding: 0.85em;
    background: inherit;
    color: ${theme.colors.accent};
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-action {
      width: calc(7 * ${sizes.bigFont});
      margin-top: 0;
    }
    .ticket-action.disabled {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .ticket-action a {
    transition: color ease-out 250ms;
    display: block;
    padding: 1em;
    text-decoration: inherit;
    height: 100%;
  }
  .ticket-action a:hover {
    color: ${theme.colors.accent};
    background: ${theme.colors.white};
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-action a {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .ticket-price {
    display: block;
    font-size: ${sizes.bigFont};
  }
  .ticket-vat {
    display: block;
    font-size: ${sizes.smallFont};
  }

  .ticket-info {
    text-align: center;
  }
  .ticket-info > h3 {
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-info {
      text-align: right;
    }
  }

  .ticket-info-bulk {
    margin-top: 2rem;
  }

  .list-check {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1.6em;
  }
  .list-check > li {
    margin-left: 1em;
  }
  .list-check > li::before {
    content: '✅ ';
  }
`
