import css from 'styled-jsx/css'

import { theme } from './css-variables'

export const styles = css.global`
  .faq-content {
    padding: 24px 0 0;
    list-style: none;
    margin: 0 auto;
    max-width: 75%;
  }
  .faq-content-item {
  }
  .faq-content-question {
    font-weight: 700;
    font-size: 1.25rem;
    margin: 0 0 5px;
  }
  .faq-content-answer {
    line-height: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.textLight};
    margin: 0;
    padding-bottom: 25px;
  }
`
