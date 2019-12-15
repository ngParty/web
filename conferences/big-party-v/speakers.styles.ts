import css from 'styled-jsx/css'
import { theme } from './css-variables'

const makeTextSquare = (top: number, unit = 'rem') => {
  return `
    padding-top: ${top}${unit};
    transform: translateY(${Math.round(top / 2) * -1}${unit});
  `
}

export const styles = css.global`
  .speakers {
  }
  .speaker-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .speaker-list > li {
    flex: 1 1 auto;
    /* background-color: ${theme.colors.bgDark}; */
    padding: 0 7vw 4vw;
    margin-top: 1rem;
    width: 100%;
  }
  @media(min-width: ${theme.breakpoints.medium}){
    .speaker-list > li {
      width: 50%;
      padding: 0 2vw 4vw;
    }
  }

  /* ================ */
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.bgDark};
    /* padding: 0.25rem; */
    display: flex;
    flex-direction: column;
    transition: filter 0.3s, transform 0.3s, box-shadow 0.2s ease;
    /* clip-path: polygon(10% 0,100% 0,100% 80%,90% 100%,0 100%,0 20%); */
    border-bottom: 3px solid ${theme.colors.accent};
    cursor: pointer;
  }
  .card:hover {
    transform: translate(10px,-6px);
    box-shadow: 0 15px 25px 0 rgba(0,0,0,0.15);
  }
  @media(min-width: ${theme.breakpoints.medium}){
    .card {
      flex-direction: row;
    }
    .card > * {
      width: 50%;
    }
  }
  .card-speaker {
  }

  /* ================ */
  .card-img {
    flex: 1 1;
    margin: 0;
  }

  /* ================ */
  .card-info {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    padding-top: 10%;
    padding-bottom: 10%;
  }

  @media (min-width: ${theme.breakpoints.medium}) {
   .card-info{
    padding-top: 0;
    padding-bottom: 0;
    /* ${makeTextSquare(5)} */
   }
  }
  @media (min-width: ${theme.breakpoints.large}) {
   .card-info{
    /* ${makeTextSquare(10)} */
   }
  }
  .card-info > * {
    padding: 0 10%
  }

  .card-heading {
    margin: 0.5rem 0 0;
  }
  .card-speaker-title {
    color: ${theme.colors.accent};
    line-height: 1.2;
  }
  .card-speaker-company {
    color: ${theme.colors.lightGrey};
  }
`

export const lightboxStyles = css.global`
  .lightbox {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lightbox-content {
    background: #fff;
    padding: 4vw;
    margin: 0 4vw;
    max-width: ${theme.sizes.maxWidthContent};
  }
  .lightbox-headline {
    line-height: 1.6rem;
    color: #48525c;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 0;
  }
  .lightbox-subtitle {
    line-height: 1.6rem;
    font-size: 1rem;
    color: #48525c;
    font-weight: 300;
    margin-bottom: 0;
    margin-top: 0;
  }
  .lightbox-social {
  }

  .lightbox-bio {
    line-height: 1.6rem;
    font-weight: 400;
    color: #48525c;
  }

  .lightbox-talk {
    line-height: 1.6rem;
    font-weight: 400;
    color: #48525c;
  }
`
