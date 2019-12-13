import { data as DATA } from '../data'
import { TwitterIcon, LinkedInIcon, GithubIcon } from '../../../components'

type Props = {
  data: typeof DATA['links']
}

export const Footer = (props: Props) => {
  const { data } = props

  return (
    <>
      <style jsx global>
        {`
          footer {
            background-color: #fff;
            padding: 30px 0;
            position: relative;
          }

          footer a {
            line-height: 0;
          }

          .footer-image {
            transition: transform ease-out 250ms;
            margin: 0 10px;
          }
          .footer-image:hover {
            transform: scale(1.2);
          }

          footer .footer-image.twitter {
            width: 22.93px;
            height: 19.66px;
            background-position: -60px -24px;
          }

          footer .footer-image.wordpress {
            width: 24.03px;
            height: 24.03px;
            background-position: -24.6px -30px;
          }

          footer .footer-icons {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
          }

          footer .footer-privacy {
            color: #ccc;
            font-size: 12px;
            font-weight: 300;
            left: 20px;
            position: absolute;
            text-transform: none;
          }

          .footer-cta {
            background: -webkit-linear-gradient(
              left,
              #1c79c0,
              #0389ff,
              #0dd3ff
            );
            background: linear-gradient(to right, #1c79c0, #0389ff, #0dd3ff);
            padding: 20px 30px;
            position: relative;
            z-index: 1;
          }

          .footer-cta .cta-line {
            position: absolute;
          }

          .footer-cta .cta-line.left {
            height: 140px;
            left: 0;
            top: -50px;
            width: 156px;
          }

          .footer-cta .cta-line.right {
            bottom: -30px;
            height: 107.5px;
            right: -50px;
            width: 175px;
          }

          .footer-cta .cta-line.right-half {
            bottom: 0;
            height: 77.5px;
            right: -50px;
            width: 175px;
            overflow: hidden;
          }

          .footer-cta .inner {
            position: relative;
            margin: 0 auto;
            max-width: 1200px;
            width: 80%;
          }

          .footer-cta .inner h2,
          .footer-cta .inner a {
            color: #fff;
            display: inline-block;
          }

          .footer-cta .inner a {
            position: absolute;
            right: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
          }

          .footer-cta .inner a::after {
            background: url(./static/img/arrow.svg) center/cover no-repeat;
            content: '';
            display: inline-block;
            height: 12px;
            margin-left: 10px;
            width: 12px;
          }

          .rtl .footer-cta .inner a {
            left: 0;
            right: auto;
          }

          .rtl .footer-cta .inner a::after {
            margin: 0 10px 0 0;
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
          }
        `}
      </style>
      <section className="footer ngparty-conf-section">
        <ul>
          <li>
            <a href={data.codeOfConduct}>Code of Conduct</a>
          </li>
          <li>
            <a href="/TODO">Accessibility</a>
          </li>
          <li>
            <a href={data.email}>Contact</a>
          </li>
        </ul>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="twelve columns footer-icons">
              <a href={data.social.twitter} className="footer-image">
                <TwitterIcon
                  style={{ width: '1.5rem', height: 'auto', fill: '#4dd0e1' }}
                />
              </a>
              <a href={data.social.github} className="footer-image">
                <GithubIcon style={{ width: '1.5rem', height: 'auto' }} />
              </a>
              <a href={data.social.linkedin} className="footer-image">
                <LinkedInIcon
                  style={{ width: '1.5rem', height: 'auto', fill: '#1565c0' }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
