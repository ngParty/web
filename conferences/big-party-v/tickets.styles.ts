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
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-list {
      display: flex;
    }
  }

  .ticket-list li {
    margin-top: 2rem;
  }
  .ticket-list li:first-child {
    margin-top: 0;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-list li {
      flex: 1;
      margin-top: 0;
    }
  }

  .ticket {
    padding: 1.25rem;
    height: 100%;
    background-color: ${theme.colors.bgDark};
    color: ${theme.colors.lightGrey};
    transition: box-shadow 250ms ease-out;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket {
      display: flex;
      flex-direction: column;
      margin: 0 0.75rem;
    }
  }
  .ticket:not(.disabled):hover {
    box-shadow: ${theme.shadow.main};
  }
  .ticket.disabled {
    opacity: 0.35;
    cursor: not-allowed;
    box-shadow: none;
  }

  .ticket-type {
    font-size: ${sizes.bigFont};
    color: ${theme.colors.accent};
    padding-bottom: 0.25em;
    border-bottom: 1px solid ${theme.colors.textLight};
  }

  .ticket-type__title {
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
  }

  .ticket-type__date {
    font-size: ${sizes.smallFont};
  }

  .ticket-description {
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .ticket-description {
      margin-bottom: auto;
    }
  }

  .ticket-actions-container {
    text-align: center;
    text-transform: uppercase;
    margin-top: 1.5rem;
    color: ${theme.colors.white};
  }
  .ticket-actions-container.disabled {
    font-size: ${sizes.bigFont};
    color: ${theme.colors.accent};
    padding: 0.25em;
  }

  .ticket-action {
    display: block;
    padding: 1em;
    transition: color ease-out 250ms;
    text-decoration: inherit;
    line-height: 1.4;
  }
  .ticket-action--primary {
    color: ${theme.colors.white};
    background: ${theme.colors.accent};
  }
  .ticket-action--primary:hover {
    color: ${theme.colors.accent};
    background: ${theme.colors.white};
  }
  .ticket-action--secondary {
    margin-top: 0.5em;
    color: ${theme.colors.accent};
  }
  .ticket-action--secondary:hover {
    color: ${theme.colors.white};
    text-decoration: underline;
  }

  .ticket-price {
    text-align: center;
  }
  .ticket-price__amount {
    display: block;
    font-size: ${sizes.bigFont};
    font-weight: bold;
    color: ${theme.colors.accent};
  }
  .ticket-price__fees {
    display: block;
    font-size: ${sizes.smallFont};
    font-weight: 200;
  }

  .ticket-info {
    text-align: center;
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
