import css from 'styled-jsx/css'

export const globalStyles = css.global`
  html,
  body,
  blockquote,
  pre,
  hr,
  dl,
  dd,
  ol,
  ul,
  figure {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    color: #000;
    font-family: 'Roboto', sans-serif;
    /* adding main-background to the top
    padding-top: 140px;
    */
  }

  @media only screen and (max-width: 956px) {
    body {
      /* adding main-background to the top
      padding-top: 120px
      */
    }
  }

  .main-background {
    height: 30rem;
    background: url(/big-party-iv/img/main-background.jpg) no-repeat top center;
    background-size: cover;
  }

  img {
    border: 0;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #000;
    font-weight: 300;
    margin: 0.25em 0;
  }

  h1,
  h2.h1 {
    font-size: 50px;
    font-weight: 100;
    line-height: 65px;
  }

  @media only screen and (max-width: 956px) {
    h1,
    h2.h1 {
      font-size: 35px;
      line-height: 44px;
    }
  }

  h2 {
    font-size: 40px;
    line-height: 50px;
    font-weight: 100;
  }

  @media only screen and (max-width: 956px) {
    h2 {
      font-size: 26px;
      line-height: 40px;
      font-weight: 300;
    }
  }

  h3 {
    font-size: 30px;
    line-height: 40px;
  }

  @media only screen and (max-width: 956px) {
    h3 {
      font-size: 20px;
      line-height: 28px;
    }
  }

  h4 {
    font-size: 24px;
    line-height: 32px;
  }

  @media only screen and (max-width: 956px) {
    h4 {
      font-size: 18px;
      line-height: 26px;
    }
  }

  a {
    color: #1c79c0;
    position: relative;
    text-decoration: none;
  }

  /* ========================= */

  a.underlined,
  .card-container.grid .card-link p {
    hyphens: manual;
    overflow-wrap: normal;
    white-space: nowrap;
    word-break: normal;
    word-wrap: normal;
  }

  .light,
  a,
  .text-label,
  amp-sidebar .return-button {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.56px;
    line-height: 16px;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 956px) {
    .light,
    a,
    .text-label,
    amp-sidebar .return-button {
      font-size: 12px;
    }
  }

  body,
  .header .tab .list-container > ul li a,
  .card,
  .searchbar input {
    font-weight: 300;
    text-transform: none;
  }

  body,
  .card {
    font-size: 20px;
    line-height: 28px;
  }

  @media only screen and (max-width: 956px) {
    body,
    .card {
      font-size: 16px;
      line-height: 26px;
    }
  }

  .small,
  .header .tab .list-container > ul li a,
  .searchbar input {
    color: #333;
    font-size: 16px;
    line-height: 26px;
  }

  @media only screen and (max-width: 956px) {
    .small,
    .header .tab .list-container > ul li a,
    .searchbar input {
      font-size: 14px;
    }
  }

  .smaller {
    color: #333;
    font-size: 14px;
    line-height: 26px;
  }

  .light {
    color: #959595;
    margin-bottom: 15px;
  }

  .desktop-up,
  .desktop-only {
    display: none;
    visibility: hidden;
  }

  @media only screen and (min-width: 957px) {
    .desktop-up,
    .desktop-only {
      display: block;
      visibility: visible;
    }
  }

  .tablet-up {
    display: none;
    visibility: hidden;
  }

  @media only screen and (min-width: 1025px) {
    .tablet-up {
      display: block;
      visibility: visible;
    }
  }

  .tablet-down {
    display: none;
    visibility: hidden;
  }

  @media only screen and (max-width: 1024px) {
    .tablet-down {
      display: block;
      visibility: visible;
    }
  }

  .mobile-down {
    display: none;
    visibility: hidden;
  }

  @media only screen and (max-width: 956px) {
    .mobile-down {
      display: block;
      visibility: visible;
    }
  }

  @media only screen and (max-width: 956px) {
    .mobile-show {
      display: block;
    }
  }

  @media only screen and (max-width: 956px) {
    .mobile-hide {
      display: none;
    }
  }

  @media only screen and (max-width: 1024px) {
    .tablet-show {
      display: block;
    }
  }

  @media only screen and (max-width: 1024px) {
    .tablet-hide {
      display: none;
    }
  }

  .header .tab .list-container > ul li.has-sublist::after,
  .language .current::after,
  amp-sidebar .language .current::after,
  .searchbar button,
  amp-sidebar .has-sub-level::after,
  footer .footer-image.twitter,
  footer .footer-image.wordpress {
    display: inline-block;
    background-image: url('/big-party-iv/img/sprite.svg');
    background-size: 99px 74px;
  }

  a.underlined::before,
  .card-container.grid .card-link p::before {
    background: -webkit-linear-gradient(left, #0389ff, #0dd3ff);
    background: linear-gradient(to right, #0389ff, #0dd3ff);
    bottom: -3px;
    content: '';
    left: 0;
    height: 1px;
    position: absolute;
    right: 0;
  }

  a.underlined.cta,
  .card-container.grid .card-link p.cta {
    overflow: hidden;
  }

  a.underlined.cta::before,
  .card-container.grid .card-link p.cta::before {
    bottom: -5px;
    height: 2px;
  }

  a.underlined.cta:hover::before,
  .card-container.grid .card-link p.cta:hover::before {
  }

  @media only screen and (max-width: 956px) {
    a {
      font-size: 14px;
    }
  }

  .button {
    background-color: #0389ff;
    display: inline-block;
    color: #fff;
    padding: 15px 20px;
    position: relative;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }

  .button span {
    position: relative;
    z-index: 1;
  }

  .button::before {
    background: -webkit-linear-gradient(left, #0389ff, #0dd3ff);
    background: linear-gradient(to right, #0389ff, #0dd3ff);
    bottom: -2px;
    content: '';
    left: 0;
    height: 2px;
    position: absolute;
    right: 0;
  }

  .button::after {
    background: -webkit-linear-gradient(54deg, #0dd3ff, #0389ff);
    background: linear-gradient(36deg, #0dd3ff, #0389ff);
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .button:hover {
    background-color: transparent;
  }

  .button:hover .arrow {
    transform: translateX(3px);
  }

  .button.light {
    background: #fff;
    color: #1c79c0;
  }

  .button.light::after {
    background: -webkit-linear-gradient(54deg, #5adafd, #51b9fd);
    background: linear-gradient(36deg, #5adafd, #51b9fd);
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    z-index: 0;
  }

  .button.light:hover {
    color: #fff;
  }

  .button.light:hover::after {
    opacity: 1;
  }

  .button .arrow {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 7px solid white;
    display: inline-block;
    height: 0;
    margin-left: 8px;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    width: 0;
  }

  .rtl .button .arrow {
    margin: 0 8px 0 0;

    transform: rotate(180deg);
  }

  .rtl .button:hover .arrow {
    transform: rotate(180deg) translateX(3px);
  }

  blockquote {
    color: #797c82;
    border-left: 4px solid #f9f9f9;
    padding-left: 15px;
    font-size: 18px;
    letter-spacing: -1px;
    font-style: italic;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  .rtl blockquote {
    border-left: 0;
    border-right: 4px solid #f9f9f9;
    padding-left: 0;
    padding-right: 15px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  figure {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
  }

  amp-youtube,
  amp-vimeo {
    box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.1);
  }

  .rtl figure {
    direction: ltr;
  }

  .container {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 3000px;
    padding: 0 22px;
  }

  .container.sm {
    max-width: 800px;
  }

  .container.md {
    max-width: 925px;
  }

  .container.lg {
    max-width: 1200px;
  }

  .container.xl {
    max-width: 1440px;
  }

  .wrap {
    margin: 0 auto;
  }

  :target::before {
    content: '';
    display: block;
    height: 110px;
    margin-top: -110px;
    visibility: hidden;
  }

  @media only screen and (max-width: 956px) {
    :target::before {
      height: 70px;
      margin-top: -70px;
    }
  }

  .header {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #fff;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
    font-size: 14px;
    font-weight: 300;

    transform: translateZ(0);
  }

  .header.fixed {
    left: 0;
    position: fixed;
    top: 0;

    transform: translateY(0%);
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    width: 100%;
    z-index: 1000;
  }

  .header .promo {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: -webkit-linear-gradient(54deg, #0dd3ff, #0389ff, #1c79c0);
    background: linear-gradient(36deg, #0dd3ff, #0389ff, #1c79c0);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-weight: 300;
    height: 60px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    padding: 0 20px;
    position: relative;
    text-align: center;
    text-transform: none;
  }

  .header .promo .description,
  .header .promo .link {
    color: white;
    line-height: 1.5;
    position: relative;
  }

  .header .promo .description {
    font-size: 20px;
  }

  .header .promo .link {
    display: inline-block;
    font-weight: 400;
    margin-left: 20px;
    text-transform: uppercase;
    vertical-align: center;
  }

  .header .promo .link::after {
    background: url(/big-party-iv/img/arrow.svg) center/cover no-repeat;
    content: '';
    display: inline-block;
    height: 10px;
    margin-left: 10px;
    width: 10px;
  }

  .header .promo-line {
    left: 50px;
    top: -50px;
    position: absolute;
    width: 150px;
  }

  .header .nav-container,
  .header .left-nav,
  .header .alt,
  .header .tabs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .header .nav-container {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
  }

  .header .left-nav,
  .header .alt {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .header .left-nav {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 20px;
    font-weight: 300;
    margin-left: 0;
  }

  .header .left-nav .header-title {
    background: url('/big-party-iv/img/logo-blue.svg') no-repeat center
      left/100%;
    color: #232323;
    margin: 0;
    padding: 40px 40px 40px 60px;
    text-transform: none;
    white-space: nowrap;
    width: auto;
  }

  .header .left-nav .header-title::after,
  .header .left-nav .header-title::before {
    display: none;
  }

  .header .alt,
  .header .tabs {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }

  .header .alt {
    padding: 0;
  }

  .header .alt.right {
    font-size: 15px;
  }

  .header .tabs {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: 60px;
  }

  .header .tab {
    color: #333;
    font-weight: 400;
    margin: 0 4px;
    padding: 6px;
    position: relative;
    -webkit-transition: 0.1s ease color;
    transition: 0.1s ease color;
  }

  .header .tab::after {
    background: -webkit-linear-gradient(left, #1c79c0, #0389ff, #0dd3ff);
    background: linear-gradient(to right, #1c79c0, #0389ff, #0dd3ff);
    bottom: 0;
    content: '';
    height: 3px;
    left: 20px;
    margin: auto;
    opacity: 0;
    position: absolute;
    right: 20px;
    -webkit-transition: 0.1s ease opacity;
    transition: 0.1s ease opacity;
  }

  .header .tab:hover,
  .header .tab.active {
    color: #1c79c0;
  }

  .header .tab.active::after {
    opacity: 1;
  }

  .header .tab.active:hover::after {
    opacity: 0;
  }

  .header .tab.hamburger {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    background: url('/big-party-iv/img/hamburger.svg') no-repeat center/30px
      24px transparent;
    border: 0;
    cursor: pointer;
    display: none;
    height: 40px;
    margin: 0;
    padding: 0;
    width: 40px;
  }

  .header .tab {
    padding: 6px 20px;
  }

  .header .tab::before {
    bottom: 0;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
    content: '';
    left: -10px;
    opacity: 0;
    position: absolute;
    right: -10px;
    top: 20px;
    -webkit-transition: opacity 0.2s ease-out;
    transition: opacity 0.2s ease-out;
  }

  .header .tab > a {
    color: inherit;
    position: relative;
    top: 19px;
  }

  .header .tab .list-container > ul,
  .header .tab .sublist {
    list-style: none;
  }

  .header .tab .list-container,
  .header .tab .sublist {
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  .header .tab .list-container {
    left: -10px;
    top: 100%;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
    z-index: -1;
  }

  .header .tab .list-shadow {
    bottom: -50px;
    left: -50px;
    overflow: hidden;
    position: absolute;
    right: -50px;
    top: 0;
  }

  .header .tab .list-shadow::before {
    bottom: 50px;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
    content: '';
    left: 50px;
    position: absolute;
    right: 50px;
    top: 0;
  }

  .header .tab .list-container > ul {
    background: #fff;
    min-width: 250px;
    position: relative;
  }

  .header .tab .list-container > ul li {
    box-sizing: border-box;
    padding: 7.5px 30px;
    position: relative;
  }

  .header .tab .list-container > ul li.has-sublist::after {
    width: 6.12px;
    height: 11.88px;
    background-position: -84px -14.93px;
    content: '';
    position: absolute;
    right: 20px;
    top: 18px;
  }

  .header .tab .list-container > ul li:hover {
    background: #f8f8f8;
  }

  .header .tab .list-container > ul li:hover .sublist {
    opacity: 1;
    pointer-events: all;
  }

  .header .tab .list-container > ul li.external {
    padding-right: 26px;
  }

  .header .tab .list-container > ul li.external a {
    background: no-repeat right 3px / 12px;
    display: inline-block;
    padding-right: 16px;
    width: 95%;
  }

  .header .tab .list-container > ul li.external:hover a {
    background-image: url('/big-party-iv/img/ic_open_in_new_black.svg');
  }

  .header .tab .list-container > ul .sublist {
    background: #f8f8f8;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
    right: 0;
    top: 0;

    transform: translateX(100%);
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .header .tab .list-container > ul .sublist li {
    padding: 15px 35px;
  }

  .header .tab .list-container > ul .sublist li:hover {
    background: white;
  }

  .header .tab .list-container > ul .sublist li a {
    display: block;
    font-size: 14px;
    line-height: 1.3;
  }

  .header .tab:hover::before {
    opacity: 1;
  }

  .header .tab:hover .list-container {
    opacity: 1;
    pointer-events: all;
    z-index: 0;
  }

  @media only screen and (min-width: 958px) {
    .header .description.desktop-up {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 956px) {
    .header .container {
      padding-right: 18px;
    }
    .header .promo .description,
    .header .promo .link {
      font-size: 16px;
    }
    .header .promo .description.mobile-down {
      display: inline-block;
    }
    .header .left-nav {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      width: auto;
    }
    .header .left-nav .header-title {
      margin: 0;
      padding: 30px 30px 30px 50px;
      width: auto;
    }
    .header div.tab,
    .header .desktop {
      display: none;
    }
    .header .tab.hamburger {
      display: inline-block;
    }
    .header .promo .description,
    .header .promo .link {
      font-size: 14px;
    }
  }

  .rtl .header .promo .link::after {
    transform: rotate(180deg);
  }

  .rtl .header .tabs {
    margin-right: 60px;
  }

  .rtl .header .tab .list-container {
    left: auto;
    right: -10px;
  }

  .rtl .header .tab .list-container > ul li.has-sublist::after {
    left: 20px;
    right: auto;

    transform: rotate(180deg);
  }

  .rtl .header .tab .list-container > ul li.external a {
    background-position: left 3px;
    padding-left: 16px;
    padding-right: 0;
  }

  .rtl .header .tab .list-container > ul .sublist {
    left: 0;

    transform: translateX(-100%);
    right: auto;
  }

  .container .content {
    margin: 0 auto;
    min-width: 0;
    padding: 100px 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  .main {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 350px;
    min-height: 100vh;
  }

  .main h1 {
    font-size: 40px;
    font-weight: 100;
    line-height: 50px;
    margin-top: 0;
  }

  .main h2 {
    border-top: 3px solid #ededed;
    font-size: 30px;
    line-height: 40px;
    margin-top: 30px;
    padding-top: 20px;
  }

  .main h3 {
    font-size: 24px;
    line-height: 32px;
    margin-top: 30px;
  }

  .main a {
    font-size: 16px;
  }

  .main aside a {
    font-size: 14px;
  }

  .main .content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-grow: 1;
    max-width: 1000px;
    padding-bottom: 60px;
    padding-top: 70px;
  }

  .main .content ul,
  .main .content ol {
    margin-left: 40px;
  }

  .main amp-img,
  .main amp-youtube,
  .main amp-iframe {
    margin: 1em 0;
  }

  .rtl .main {
    margin: 0 350px 0 auto;
  }

  @media only screen and (max-width: 956px) {
    .container .content {
      max-width: 100%;
      padding: 70px 0;
    }
    .main {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      margin-left: 0;
    }
    .main h1 {
      font-size: 26px;
      line-height: 40px;
      font-weight: 300;
    }
    .main h2 {
      font-size: 20px;
      line-height: 28px;
    }
    .main h3 {
      font-size: 18px;
      line-height: 26px;
    }
    .main a {
      font-size: 14px;
    }
    .rtl .main {
      margin-right: 0;
    }
  }

  .bg-triangle-primary .wrap,
  .bg-triangle-secondary .wrap,
  .bg-triangle-bottom .wrap {
    overflow: hidden;
    position: relative;
  }

  .bg-triangle-primary .wrap::before,
  .bg-triangle-primary .wrap::after,
  .bg-triangle-secondary .wrap::before,
  .bg-triangle-secondary .wrap::after,
  .bg-triangle-bottom .wrap::before,
  .bg-triangle-bottom .wrap::after {
    background: -webkit-linear-gradient(
      left,
      rgba(3, 137, 255, 0.05),
      rgba(13, 211, 255, 0.05)
    );
    background: linear-gradient(
      to right,
      rgba(3, 137, 255, 0.05),
      rgba(13, 211, 255, 0.05)
    );
    display: block;
    height: 1400px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  .bg-triangle-primary .wrap::before,
  .bg-triangle-secondary .wrap::before,
  .bg-triangle-bottom .wrap::before {
    content: '';
    top: 0;

    transform: skewY(36deg);
    -webkit-transform-origin: top right;
    transform-origin: top right;
  }

  .bg-triangle-primary .wrap::before {
    background: -webkit-linear-gradient(left, #0389ff, #0dd3ff);
    background: linear-gradient(to right, #0389ff, #0dd3ff);
  }

  .bg-triangle-primary .post-title,
  .bg-triangle-primary nav.breadcrumb li,
  .bg-triangle-primary nav.breadcrumb a {
    color: #fff;
  }

  .bg-triangle-bottom .wrap::after {
    bottom: 0;
    content: '';

    transform: skewY(-36deg);
    -webkit-transform-origin: bottom right;
    transform-origin: bottom right;
  }

  nav.breadcrumb {
    margin: 15px 20px;
    position: absolute;
    z-index: 2;
  }

  nav.breadcrumb ul {
    line-height: 12px;
    list-style: none;
  }

  nav.breadcrumb li,
  nav.breadcrumb a {
    color: #959595;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 17px;
    text-transform: none;
  }

  nav.breadcrumb li {
    display: inline;
  }

  nav.breadcrumb li::after {
    content: '\\00bb';
    margin-left: 5px;
  }

  nav.breadcrumb li:last-child::after {
    content: '';
  }

  .rtl nav li::after {
    margin-left: 0;
    margin-right: 5px;
  }

  @media only screen and (max-width: 956px) {
    nav li,
    nav a {
      font-size: 10px;
    }
  }

  .language {
    height: 33px;
    left: 100px;
    position: relative;
    top: -4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .language section {
    border: 0;
    padding: 0;
  }

  .language section[expanded] .current,
  .language section[expanded] .others-inner {
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  }

  .language section[expanded] .current {
    left: 60px;
  }

  .language section[expanded] .current::after {
    transform: scale(0.75);
  }

  .language .current {
    font-size: 1em;
    margin-right: 100px;
    text-align: right;
    width: 140px;
  }

  .language .current::after {
    width: 16px;
    height: 8.3px;
    background-position: -60px -43.66px;
    content: '';
    display: inline-block;
    position: relative;
    top: -4px;

    transform: scale(0.75);
  }

  .language .others {
    padding: 0 50px 50px 50px;
    left: -50px;
    top: -1px;
  }

  .language .others-inner {
    background: #fff;
    margin: 0;
  }

  .language .others-inner div {
    width: 200px;
  }

  .language .others-inner div a {
    margin: 0 10px;
    text-transform: capitalize;
  }

  .language .others-inner div:hover {
    background-color: #f9f9f9;
  }

  .language .current,
  .language .others-inner div {
    background-color: transparent;
    border: 0;
    box-sizing: border-box;
    height: auto;
    padding: 10px 15px 8px;
  }

  .language .current:hover a,
  .language .others-inner div:hover a {
    text-decoration: none;
  }

  .language .current a,
  .language .others-inner div a {
    color: #333;
    display: inline-block;
    overflow: hidden;
    padding: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .rtl .language {
    left: auto;
    right: 100px;
  }

  .rtl .language .current {
    margin: 0 0 0 100px;
    right: -60px;
  }

  .rtl .language .others {
    left: auto;
    right: -50px;
  }

  .rtl .language section[expanded] .current {
    left: auto;
    right: 0;
  }

  .rtl .language .current a,
  .rtl .language .others-inner div a {
    background-position: right 6px;
  }

  header .language {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    margin-left: 12px;
  }

  amp-sidebar .language {
    bottom: 15px;
    left: 10px;
    position: absolute;
    top: auto;
  }

  amp-sidebar .language section[expanded] .current {
    left: 0;
  }

  amp-sidebar .language .current a,
  amp-sidebar .language .others-inner div a {
    color: #1c79c0;
  }

  amp-sidebar .language .current {
    margin-right: 0;
    text-align: left;
  }

  amp-sidebar .language .current::after {
    width: 15.53px;
    height: 8.3px;
    background-position: -35.36px -54.2px;
    top: -5px;

    transform: rotate(180deg) scale(0.75);
  }

  amp-sidebar .language .others {
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
    left: 0;
    padding: 0;

    transform: translateY(-117%);

    transform: translateY(calc(-100% - 50px));
  }

  amp-sidebar .language .others .others-inner {
    box-shadow: none;
    width: 240px;
  }

  amp-sidebar .language .others .others-inner::after {
    clear: both;
    content: '';
    display: table;
  }

  amp-sidebar .language .others .others-inner div {
    float: left;
    width: 120px;
  }

  .rtl amp-sidebar .language section[expanded] .current {
    right: -50px;
  }

  .points {
    max-width: 1200px;
    padding: 100px;
    position: relative;
  }

  .point {
    border-bottom: 3px solid #e5f7ff;
    padding: 30px;
  }

  .point:last-child {
    border-bottom: 0;
  }

  .point-text {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .point-text h4,
  .point-text .description {
    margin: 0 20px;
    width: 0;
  }

  .point-text h4 {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  .point-text .description {
    -webkit-box-flex: 2;
    -ms-flex: 2 1 auto;
    flex: 2 1 auto;
  }

  .point-text .description a {
    text-transform: none;
  }

  .point-text .description p {
    margin-top: 0;
  }

  .point-example {
    margin: 40px 20px 20px;
  }

  @media only screen and (max-width: 1024px) {
    .points {
      padding: 100px 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .points {
      padding: 0;
    }
    .point {
      padding: 30px 0;
    }
    .point .point-text {
      display: block;
    }
    .point h4,
    .point .description {
      width: auto;
    }
    .point h4 {
      margin-bottom: 30px;
    }
  }

  .large-cta {
    background: -webkit-linear-gradient(54deg, #0dd3ff, #0389ff, #1c79c0);
    background: linear-gradient(36deg, #0dd3ff, #0389ff, #1c79c0);
    padding: 100px 0;
    position: relative;
    text-align: center;
  }

  .large-cta .large-cta-lines {
    position: absolute;
  }

  .large-cta .large-cta-lines.left {
    bottom: -30%;
    left: -10%;
  }

  .large-cta .large-cta-lines.right {
    right: -5%;
    top: -30%;
  }

  .large-cta h1,
  .large-cta p {
    color: #fff;
    margin: 0 auto 50px;
    max-width: 600px;
  }

  .large-cta h1 + p {
    margin-top: -30px;
  }

  amp-carousel .card-container {
    padding-left: 35px;
    padding-right: 35px;
  }

  .amp-carousel-button {
    background: transparent;
    cursor: pointer;
  }

  .amp-carousel-button:before,
  .amp-carousel-button:after {
    background: #acbac1;
    content: '';
    display: block;
    height: 2px;
    width: 20px;
  }

  .amp-carousel-button:before {
    transform: translate(10px, 10px) rotate(45deg);
  }

  .amp-carousel-button:after {
    transform: translate(10px, 22px) rotate(-45deg);
  }

  .amp-carousel-button-prev {
    left: 0;

    transform: translateY(-50%) translateY(-10px) rotateY(180deg);
  }

  .amp-carousel-button-next {
    right: 0;

    transform: translateY(-50%) translateY(-10px);
  }

  .rtl .amp-carousel-button-prev {
    left: 10px;
  }

  .rtl .amp-carousel-button-next {
    right: 10px;
  }

  @media only screen and (max-width: 956px) {
    amp-carousel .amp-carousel-button {
      display: none;
    }
    amp-carousel .card-container {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .card-container {
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 20px 5px;
  }

  .card {
    background: #fff;
    box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.075);
    box-sizing: border-box;
    display: inline-block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31%;
    flex: 0 0 31%;
    -ms-flex: 0 0 calc(33% - 30px);
    flex: 0 0 calc(33% - 30px);
    -ms-flex-preferred-size: calc(33% - 30px);
    flex-basis: calc(33% - 30px);
    height: 90%;
    margin: 10px 5px;
    padding: 10px;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card::before {
    background: linear-gradient(to right, #1c79c0, #0389ff, #0dd3ff);
    content: '';
    left: 0;
    height: 2px;
    position: absolute;
    right: 0;
    top: -2px;
  }

  .card.centered {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }

  .card:hover {
    box-shadow: 0px 3px 50px 0 rgba(0, 0, 0, 0.075);

    transform: translateY(-5px);
  }

  .card--spacer {
    box-shadow: none;
    height: 0;
    padding: 0;
  }

  .card--spacer::before {
    display: none;
  }

  .card--spacer:hover {
    box-shadow: none;
  }

  .card-inner {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
  }

  .card-type {
    color: #1c79c0;
    margin-bottom: 15px;
  }

  .card-content {
    font-weight: 300;
    text-transform: none;
  }

  .card-date {
    margin-top: 10px;
  }

  .card-section-heading {
    font-size: 30px;
    margin: 50px 10px 0;
  }

  .card-container.grid {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .card-container.grid::after {
    content: '';
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31%;
    flex: 0 0 31%;
    -ms-flex: 0 0 calc(33% - 30px);
    flex: 0 0 calc(33% - 30px);
    -ms-flex-preferred-size: calc(33% - 30px);
    flex-basis: calc(33% - 30px);
    margin: 10px 5px;
    visibility: hidden;
  }

  .card-container.grid .card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: auto;
    min-height: 400px;
    padding: 0;
  }

  .card-container.grid .card:hover .card-link p::before {
  }

  .card-container.grid .card-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: auto;
    padding: 50px;
    width: 100%;
  }

  .card-container.grid .card-title {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    margin-bottom: 1em;
  }

  .card-container.grid .card-title h2 {
    font-size: 36px;
  }

  .card-container.grid .card-link p {
    color: #1c79c0;
    display: inline;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .card-container.grid .card-link p::before {
    bottom: -5px;
    height: 2px;
  }

  .card-container.case .card-inner {
    padding: 50px;
  }

  .card-container.case .card-date::before {
    content: ' | ';
    display: inline;
    margin: 0 12px;
  }

  .card-container.case .card-logo {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    margin: 1em 0;
  }

  @media only screen and (max-width: 956px) {
    .card-container.grid .card,
    .card-container.case .card {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 48%;
      flex: 0 0 48%;
      -ms-flex: 0 0 calc(50% - 30px);
      flex: 0 0 calc(50% - 30px);
      -ms-flex-preferred-size: calc(50% - 30px);
      flex-basis: calc(50% - 30px);
    }
    .card-container.grid .card-title,
    .card-container.case .card-title {
      margin-bottom: 2em;
    }
    .card-section-heading {
      margin: 50px 0 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .card-container.grid .card,
    .card-container.case .card {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      margin: 10px 0;
      min-height: 300px;
    }
  }

  amp-accordion section {
    border-bottom: 2px solid #ededed;
  }

  .accordion-header,
  .accordion-content {
    margin: 20px 0;
    padding: 0 25px 0 65px;
  }

  .accordion-header {
    background-color: transparent;
    border: 0;
  }

  .accordion-title {
    margin: 0;
    position: relative;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }

  .accordion-title:hover {
    color: #1c79c0;
  }

  .accordion-title::before,
  .accordion-title::after {
    background: -webkit-linear-gradient(left, #0389ff, #0dd3ff);
    background: linear-gradient(to right, #0389ff, #0dd3ff);
    content: '';
    display: inline-block;
    height: 2px;
    left: -40px;
    position: absolute;
    top: 50%;
    width: 8px;
  }

  .accordion-title::after {
    transform: rotate(90deg);
  }

  section[expanded] .accordion-title::after {
    content: none;
  }

  .accordion-content p:first-child {
    margin-top: 0;
  }

  .accordion-content p:last-child {
    margin-bottom: 2px;
  }

  @media only screen and (max-width: 956px) {
    amp-accordion section {
      border-bottom: 1px solid #ededed;
    }
    .accordion-header,
    .accordion-content {
      margin: 15px 0;
      padding: 0 0 0 30px;
    }
    .accordion-title::before,
    .accordion-title::after {
      left: -30px;
    }
  }

  .lightbox {
    background-color: rgba(51, 51, 51, 0.9);
  }

  .lightbox__container {
    position: relative;
    top: 50%;
    padding: 50px;

    transform: translateY(-50%);
  }

  @media only screen and (max-width: 956px) {
    .lightbox__container {
      padding: 30px;
    }
  }

  .lightbox__close {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 40px;
    height: 40px;
    background-image: url('./static/big-party-iv/img/close.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
  }

  .searchbar {
    position: absolute;
    right: 175px;
    top: 23px;
    z-index: 2;
  }

  @media only screen and (max-width: 1030px) {
    .searchbar {
      display: none;
    }
  }

  .searchbar input {
    border: 0;
    border-bottom: 1px solid #4d4d4d;
    font-family: 'Roboto', sans-serif;
    outline: 0;
    vertical-align: bottom;
  }

  .searchbar button {
    width: 24.6px;
    height: 24.2px;
    background-position: 0px -30px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    position: relative;
    top: 3px;
    vertical-align: middle;
  }

  .rtl .searchbar {
    left: 230px;
    right: auto;
  }
`
