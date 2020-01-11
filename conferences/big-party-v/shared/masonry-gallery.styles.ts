import css from 'styled-jsx/css'

import { getRandomNumber } from './utils'
import { theme } from '../theme'

const generateWidths = (count: number) => {
  return Array(count)
    .fill('')
    .map(() => {
      return `calc(var(--masonry-img-width) * ${getRandomNumber(1, 3)})`
    })
}

const widths = generateWidths(24)

export const rootStyles = css`
  .masonry {
    --masonry-img-width: 90px;
    --masonry-img-height: 180px;
    --masonry-img-spacing: 0.25rem;
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    .masonry {
      --masonry-img-width: 150px;
      --masonry-img-height: 250px;
      --masonry-img-spacing: 0.5rem;
    }
  }
  @media (min-width: ${theme.breakpoints.xlarge}) {
    .masonry {
      --masonry-img-width: 200px;
      --masonry-img-height: 400px;
      --masonry-img-spacing: 0.75rem;
    }
  }
`

export const itemStyles = css`
  .masonry__item {
    display: block;
    height: var(--masonry-img-height);
    min-width: var(--masonry-img-width);
    position: relative;
    overflow: hidden;
    flex: 1 0 auto;

    background: transparent;
    color: white;
    margin: 0 var(--masonry-img-spacing) var(--masonry-img-spacing) 0;
    text-align: center;
    font-family: system-ui;
  }

  .masonry__item :global(amp-img.contain img) {
    object-fit: cover;
  }

  .masonry__item:nth-child(1) {
    width: ${widths[0]};
  }
  .masonry__item:nth-child(2) {
    width: ${widths[1]};
  }
  .masonry__item:nth-child(3) {
    width: ${widths[2]};
  }
  .masonry__item:nth-child(4) {
    width: ${widths[3]};
  }
  .masonry__item:nth-child(5) {
    width: ${widths[4]};
  }
  .masonry__item:nth-child(6) {
    width: ${widths[5]};
  }
  .masonry__item:nth-child(7) {
    width: ${widths[6]};
  }
  .masonry__item:nth-child(8) {
    width: ${widths[7]};
  }
  .masonry__item:nth-child(9) {
    width: ${widths[8]};
  }
  .masonry__item:nth-child(10) {
    width: ${widths[9]};
  }
`
