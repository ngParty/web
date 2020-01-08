import css from 'styled-jsx/css'

import { theme } from './theme'

const getAsset = (name: string) => `/big-party-v/img/${name}`

const borderPadding = {
  mobile: '0.35rem',
  desktop: '1rem',
}

export const styles = css`
  .intro {
    background-color: ${theme.colors.black};
  }

  .intro-bg {
    display: flex;
    height: 55vh;
    background-image: url(${getAsset('web-bg_medium-copy.jpeg')});
    background-size: cover;
    background-position: center center;
    background-color: #19102f;
    background-repeat: no-repeat;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .intro-bg {
      height: 75vh;
      background-image: url(${getAsset('web-bg_medium.jpeg')});
    }
  }
  @media (min-width: ${theme.breakpoints.xxlarge}) {
    .intro-bg {
      background-image: url(${getAsset('web-bg_large.jpeg')});
    }
  }

  .conf {
    display: flex;
    width: 100%;
    align-self: flex-end;
    justify-content: center;
    align-items: center;

    padding: 4vh 6vw;
    background: linear-gradient(
      to top,
      hsla(0, 0%, 0%, 0.9),
      75%,
      hsla(0, 0%, 0%, 0)
    );

    font-size: 0.925rem;
    transition: font-size 0.25s ease-out;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .conf {
      font-size: 1.25rem;
    }
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .conf {
      font-size: 1.35rem;
    }
  }
  @media (min-width: ${theme.breakpoints.large}) {
    .conf {
      font-size: 1.5rem;
    }
  }
  @media (min-width: ${theme.breakpoints.xlarge}) {
    .conf {
      font-size: 2rem;
    }
  }
  @media (min-width: ${theme.breakpoints.xxlarge}) {
    .conf {
      font-size: 2.25rem;
    }
  }

  .conf-intro {
    color: ${theme.colors.white};
    padding-left: ${borderPadding.mobile};
    border-left: 1px solid #fff;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .conf-intro {
      padding-left: ${borderPadding.desktop};
    }
  }
  .conf-intro__title {
    margin: 0;
  }
  .conf-intro__date {
    font-size: 1.15em;
    text-transform: uppercase;
    font-weight: 200;
    margin: 0.25rem 0 0 0;
  }

  .conf-theme {
    padding-right: ${borderPadding.mobile};
    margin: 0;
    order: -1;
    font-size: 1.25em;
    text-align: right;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    font-weight: bold;
  }
  @media (min-width: ${theme.breakpoints.small}) {
    .conf-theme {
      padding-right: ${borderPadding.desktop};
    }
  }

  .about {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    width: 100%;
    max-width: ${theme.sizes.maxWidthContent};

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding: 0 7vw 2vh;
    margin: 0 auto 50px;
  }
  .about > * {
    width: 100%;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .about > * {
      width: 50%;
    }
  }

  .about-content {
    color: ${theme.colors.textLight};
    font-size: 1.3rem;
    line-height: 1.4;
  }
`

export const aboutNumbersStyles = css`
  .about-numbers {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    list-style: none;
    padding: 1rem;
  }
  .about-numbers > li {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
  .about-numbers > li > strong {
    font-size: 3rem;
    font-weight: bold;
    color: ${theme.colors.accent};
  }
  .about-numbers > li > span {
    color: ${theme.colors.lightGrey};
  }
`

export const ticketsStyles = css`
  .about-action {
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-size: 1.25rem;
    text-transform: uppercase;
  }
`
