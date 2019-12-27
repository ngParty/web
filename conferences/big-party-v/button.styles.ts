import css from 'styled-jsx/css'
import { theme } from './css-variables'

export const styles = css.global`
  .btn {
    display: inline-block;
    color: ${theme.colors.white};
    padding: 1rem 2rem;
    margin: 0 1rem 1rem 0;
    text-decoration: none;
    text-align: center;
    border-radius: 2px;
    background-color: ${theme.colors.bgDark};
    border: 0;
    cursor: pointer;
    box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  .btn:active {
    color: ${theme.colors.white};
  }
  .btn:hover {
    transform: translateY(-0.125em);
    box-shadow: 0 25px 20px -15px rgba(0, 0, 0, 0.15);
  }

  .btn--secondary:active {
    color: ${theme.colors.textDark};
  }
  .btn--secondary {
    color: ${theme.colors.textDark};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.bgDark};
  }

  .btn--accent {
    color: ${theme.colors.white};
    background: ${theme.colors.accent};
  }
`
