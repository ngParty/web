import Head from 'next/head'

import { globalStyles } from './global.styles'

const rootSelector = '.ngparty-conf'
const sectionSelector = `${rootSelector}-section`

type Props = {
  title: string
  ampStyles?: React.ReactElement
  ampDependencies?: React.ReactElement | React.ReactElement[]
  children: React.ReactElement | React.ReactElement[]
}
export const Layout = (props: Props) => {
  const { ampDependencies, ampStyles, title, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/big-party-iv/meta/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400"
          rel="stylesheet"
        />

        {/* AMP DEPS */}
        {ampDependencies}
        {ampStyles}
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx global>
        {`
          ${rootSelector} .btn__sign-up {
            display: inline-block;
            background: #8098ff;
            border-radius: 2px;
            padding: 0.5em 1em;
            color: #fff;
            font-size: 20px;
            font-weight: 400;
            vertical-align: middle;
            margin-top: 20px;
            margin-left: 24px;
          }

          ${rootSelector} .btn__sign-up:hover {
            text-decoration: none;
            background: #e69a00;
          }

          ${rootSelector} section${sectionSelector} {
            padding: 0;
          }

          ${rootSelector} section${sectionSelector} .wrapper {
            margin: 0 auto;
            width: 80%;
            max-width: 800px;
          }

          ${rootSelector} section${sectionSelector} h2 {
            font-size: 4em;
            margin-bottom: 0em;
          }

          ${rootSelector} section${sectionSelector}.teaser {
            margin-top: 80px;
            text-align: center;
          }

          ${rootSelector} section${sectionSelector}.teaser p {
            padding-bottom: 2em;
          }

          ${rootSelector} section${sectionSelector}.teaser p span {
            font-weight: 400;
          }

          ${rootSelector} section${sectionSelector}.description {
            background: #232323;
            margin-top: 40px;
            position: relative;
          }

          ${rootSelector} section${sectionSelector}.description p {
            background: #fff;
            padding: 1em;
            margin: 0 auto;
            width: 80%;
            max-width: 800px;
            border-top: 5px solid #232323;
            position: relative;
            top: -40px;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.31);
            text-align: center;
          }

          ${rootSelector} section${sectionSelector}.description p span {
            display: block;
            text-align: left;
          }

          ${rootSelector} section${sectionSelector}.description ul {
            text-align: center;
            padding-bottom: 2em;
          }

          ${rootSelector} section${sectionSelector}.description ul li {
            background: #ffffff;
            padding: 6px 12px;
            padding-left: 20px;
            border-radius: 2px;
            display: inline-block;
            margin: 0;
            margin-left: -6px;
            position: relative;
            overflow: hidden;
          }

          ${rootSelector} section${sectionSelector}.description ul li::after {
            display: block;
            content: '';
            width: 4px;
            position: absolute;
            top: -4px;
            bottom: -4px;
            left: 4px;
            background: #232323;
            transform: rotate(10deg);
            z-index: 1;
          }

          ${rootSelector}
            section${sectionSelector}.description
            ul
            li:first-child {
            margin-left: 0;
          }

          ${rootSelector}
            section${sectionSelector}.description
            ul
            li:first-child::after {
            display: none;
          }

          ${rootSelector} section${sectionSelector}.description ul a {
            color: #232323;
          }

          ${rootSelector} section${sectionSelector}.schedule {
            padding: 2em 0;
          }

          ${rootSelector} section${sectionSelector}.speakers {
            padding: 2em 0;
            background: #f5f5f5;
            padding-bottom: 4em;
          }

          ${rootSelector} section${sectionSelector}.workshops {
            padding: 2em 0;
            padding-bottom: 4em;
          }

          ${rootSelector} section${sectionSelector}.highlight {
            padding: 2em 0;
            background: #232323;
          }

          ${rootSelector} section${sectionSelector}.highlight .wrapper {
            display: flex;
            flex-wrap: wrap;
          }

          ${rootSelector}
            section${sectionSelector}.highlight
            .wrapper
            amp-iframe {
            flex: 1 0 40%;
            min-width: 100px;
          }

          ${rootSelector} section${sectionSelector}.highlight .wrapper div {
            margin-left: 2em;
            flex-grow: 1;
          }

          @media only screen and (max-width: 590px) {
            ${rootSelector} section${sectionSelector}.highlight .wrapper div {
              margin-left: 0;
              margin-top: 1em;
            }
          }

          ${rootSelector} section${sectionSelector}.highlight h3 {
            color: #fff;
            margin-top: 0;
          }

          ${rootSelector} section${sectionSelector}.highlight p {
            color: #fff;
          }

          ${rootSelector} section${sectionSelector}.highlight a {
            color: #fff;
            text-decoration: underline;
          }

          ${rootSelector} section${sectionSelector}.highlight span {
            display: block;
          }

          ${rootSelector} section${sectionSelector}.faq {
            font-size: 16px;
            font-weight: normal;
          }

          ${rootSelector} section${sectionSelector}.faq h3 {
            color: #232323;
            font-size: 26px;
            font-weight: 300;
            margin-top: 1.1em;
            margin-bottom: 0.5em;
          }

          ${rootSelector} section${sectionSelector}.faq dd {
            margin-bottom: 1em;
            font-weight: 300;
          }

          ${rootSelector} section${sectionSelector}.footer ul {
            text-align: center;
          }

          ${rootSelector} section${sectionSelector}.footer ul li {
            display: inline-block;
            padding: 1em;
          }

          ${rootSelector} .code-of-conduct {
            padding-bottom: 2em;
            background: #fff;
            margin: 3%;
          }

          ${rootSelector} .code-of-conduct ul,
          ${rootSelector} .code-of-conduct ol {
            margin-left: 2em;
          }

          ${rootSelector} .day {
            box-sizing: border-box;
            min-width: 300px;
          }

          ${rootSelector} .day h4 {
            border-bottom: 1px solid #eee;
            padding-bottom: 8px;
          }

          ${rootSelector} ul.schedule {
            list-style: none;
            margin-left: 114px;
          }

          ${rootSelector} ul.schedule > li {
            padding: 5px;
            padding-bottom: 10px;
            display: flex;
            align-items: flex-start;
            position: relative;
          }

          ${rootSelector} ul.schedule > li::after {
            content: '';
            display: block;
            position: absolute;
            width: 1px;
            background: #bbb;
            bottom: 0px;
            top: 35px;
            left: 23px;
          }

          ${rootSelector} ul.schedule > li div {
            padding-left: 23px;
          }

          ${rootSelector} ul.schedule > li span.image {
            display: block;
            border-radius: 50px;
            overflow: hidden;
            height: 100px;
            width: 100px;
            position: absolute;
            top: -30px;
            left: -115px;
            background: #eee;
          }

          ${rootSelector} ul.schedule > li span.image.multiple {
            width: 60px;
            height: 60px;
          }

          ${rootSelector} ul.schedule > li span.image.multiple:nth-child(even) {
            left: -75px;
          }

          ${rootSelector} ul.schedule > li span.image.multiple:nth-child(2) {
            top: 10px;
          }

          ${rootSelector} ul.schedule > li span.image.multiple:nth-child(3) {
            top: 50px;
          }

          ${rootSelector} ul.schedule > li span.image.multiple:nth-child(4) {
            top: 90px;
          }

          ${rootSelector} ul.schedule > li span.image.multiple:nth-child(5) {
            top: 130px;
          }

          ${rootSelector} ul.schedule > li span.image.multiple:nth-child(6) {
            top: 170px;
          }

          ${rootSelector} ul.schedule > li h5 {
            font-size: 1em;
            margin: 0;
            color: inherit;
          }

          ${rootSelector} ul.schedule > li h5::before {
            display: none;
          }

          ${rootSelector} ul.schedule > li h5.session {
            font-weight: 500;
          }

          ${rootSelector} ul.schedule > li h5.keynote {
            font-weight: 500;
            color: #232323;
          }

          ${rootSelector} ul.schedule > li h5.panel,
          ${rootSelector} ul.schedule > li h5.workshop {
            font-weight: 500;
            color: #ff9800;
          }

          ${rootSelector} ul.schedule > li p {
            font-size: 13px;
            line-height: 1.6em;
          }

          ${rootSelector} ul.schedule time {
            position: relative;
            display: inline-block;
            font-family: monospace;
          }

          ${rootSelector} ul.schedule time::before {
            content: '';
            display: block;
            position: absolute;
            width: 12px;
            height: 1px;
            background: #bbb;
            right: -17px;
            top: 50%;
          }

          ${rootSelector} ul.schedule > li.session time::after,
          ${rootSelector} ul.schedule > li.keynote time::after {
            content: '';
            display: block;
            position: absolute;
            width: 12px;
            height: 1px;
            background: #bbb;
            left: -17px;
            top: 50%;
          }

          {/* ${rootSelector} ul.schedule small {
            display: block;
            line-height: 1.6em;
          } */}

          ${rootSelector} ul.workshops {
            list-style: none;
            display: flex;
          }

          ${rootSelector} ul.workshops li {
            flex: 1 1 33%;
            border-right: 1px solid #ddd;
          }

          ${rootSelector} ul.workshops li:nth-child(odd) {
            background: #f5f5f5;
          }

          ${rootSelector} ul.workshops li:last-child {
            border-right: 0;
          }

          ${rootSelector} ul.workshops li h6 {
            font-weight: normal;
            margin: 0;
            padding: 1em;
          }

          @media only screen and (max-width: 500px) {
            ${rootSelector} ul.schedule {
              margin-left: 0;
            }
            ${rootSelector} ul.schedule > li span.image {
              display: none;
            }
            ${rootSelector} ul.schedule > li.session time::after,
            ${rootSelector} ul.schedule > li.keynote time::after {
              display: none;
            }
            ${rootSelector} ul.workshops {
              display: block;
            }
          }

          ${rootSelector} ul.speakers {
            list-style: none;
          }

          ${rootSelector} ul.speakers li {
            display: flex;
            min-height: 100px;
            margin-bottom: 40px;
          }

          ${rootSelector} ul.speakers li:nth-child(odd) {
            flex-direction: row-reverse;
          }

          ${rootSelector} ul.speakers li:nth-child(odd) .image {
            margin-right: 0;
            margin-left: 20px;
          }

          ${rootSelector} ul.speakers p {
            font-size: 13px;
            line-height: 1.6em;
          }

          ${rootSelector} ul.speakers .image {
            border-radius: 25vw;
            overflow: hidden;
            display: inline-block;
            height: 25vw;
            width: 25vw;
            max-width: 250px;
            max-height: 250px;
            background: #fff;
            flex-shrink: 0;
            margin-right: 20px;
            position: relative;
          }
        `}
      </style>
      <div className="ngparty-conf">{children}</div>
    </>
  )
}
