import css from 'styled-jsx/css'

import { theme } from './theme'

export const styles = css.global`
  .faq-content {
    padding: 24px 0 0;
    list-style: none;
    ${theme.mixins.centerMaxWidth()}
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
