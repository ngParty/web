import css from 'styled-jsx/css'

import { theme } from './theme'

const listMarginLeft = 85
const avatarMarginLeft = -(listMarginLeft - 10)
const avatarWidth = Math.abs(avatarMarginLeft - 10)
const colors = {
  border: '#005af0',
  title: '#20202a',
}

export const styles = css.global`
  .agenda {
    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.15);
    background: #fff;
    border-radius: 4px;
    padding: 0 2rem;
  }

  .agenda-content-list.conf {
    margin-bottom: 0;
    margin-top: 0;
    padding: 50px 0;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .agenda-content-list.conf {
      margin-left: ${listMarginLeft}px;
    }
  }

  .agenda-content-list {
    list-style: none;
    padding-left: 0;
  }

  .agenda-item {
    font-size: 1.125rem;
    display: flex;
    text-align: left;
    padding-left: 10px;
  }

  .agenda-item {
    line-height: 1.6rem;
    font-weight: 400;
    color: #48525c;
  }

  /* =========== */
  /* ITEM styles */
  /* =========== */
  .agenda-item-speakers {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin-left: ${avatarMarginLeft}px;
    min-width: ${avatarWidth}px;
  }

  .agenda-item-time {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    width: 50px;
    margin-right: 25px;
    padding-right: 15px;
    color: ${colors.title};
  }

  /* IMAGE */
  .agenda-item-image {
    display: none;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .agenda-item-image:nth-child(odd) {
      margin-left: -15px;
    }
    .agenda-item-image:nth-child(even) {
      margin-left: 15px;
    }
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .agenda-item-image {
      display: block;
      border-radius: 50%;
    }
  }

  .agenda-item-description {
    position: relative;
    width: 80%;
    border-left: 2px solid ${colors.border};
    padding: 0 0 45px 25px;
  }
  .agenda-item-description:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    margin-top: 8px;
    height: 8px;
    width: 8px;
    left: -5px;
    background: ${colors.border};
  }
  .agenda-item-description.session:before {
    left: -10px;
    background: #fff;
    height: 14px;
    width: 14px;
    margin-top: 4px;
    border: 2px solid ${colors.border};
  }

  .agenda-item-description-title {
    line-height: 1.6rem;
    font-size: 1.125rem;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    color: ${colors.title};
  }

  .agenda-item-description-speaker {
    line-height: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.accent};
  }

  .agenda-item-description-text {
    line-height: 1.6rem;
    font-weight: 400;
    color: #48525c;
  }
`
