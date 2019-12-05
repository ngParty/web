import Head from 'next/head'

import {
  AmpStyleBoilerplate,
  AmpStyleKeyframes,
  AmpStyleCustom,
} from '../../components'
import { data as DATA, Styles, Layout } from '../../conferences/big-party-iv'

export const config = { amp: true }

const BigPartyIV = () => {
  return (
    <>
      <Layout
        title="ngBigParty IV JavaScript REunited"
        ampDependencies={
          <>
            <script
              async
              custom-element="amp-sidebar"
              src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
            />
            <script
              async
              custom-element="amp-accordion"
              src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
            />
            <script
              async
              custom-element="amp-analytics"
              src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
            />
            <script
              async
              custom-element="amp-install-serviceworker"
              src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"
            />
            <script
              async
              custom-element="amp-form"
              src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
            />
            <script
              async
              custom-element="amp-iframe"
              src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
            />
          </>
        }
        ampStyles={<Styles />}
      >
        {/* <amp-analytics type="googleanalytics" id="analytics-ga">
    <script type="application/json">
      {
      "vars": {
        "account": "UA-74292133-4"
      },
      "triggers": {
        "trackPageview": {
          "on": "visible",
          "request": "pageview"
        }
      }
    }
    </script>
  </amp-analytics> */}
        <div className="main-background"></div>

        <div className="wrap">
          <div className="content">
            <About />

            <DescriptionAndNav />

            <Schedule data={DATA.speakers} />

            <Partners data={DATA.partners} />

            <Speakers data={DATA.speakers} />
            <Venue />

            <FAQ />

            <section className="footer ngparty-conf-section">
              <ul>
                <li>
                  <a href="https://github.com/ngParty/core/blob/master/COC.md">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a href="/TODO">Accessibility</a>
                </li>
                <li>
                  <a href="mailto:info@ngparty.cz">Contact</a>
                </li>
              </ul>
            </section>

            <footer>
              <div className="container">
                <div className="row">
                  <div className="twelve columns footer-icons">
                    <a href="//twitter.com/ngPartyCz">
                      <div className="footer-image twitter"></div>
                    </a>
                  </div>
                </div>
              </div>
            </footer>

            {/* <amp-install-serviceworker src="/service-worker.js" layout="nodisplay"></amp-install-serviceworker> */}
          </div>
        </div>
      </Layout>
    </>
  )
}

const About = () => {
  return (
    <section className="teaser ngparty-conf-section">
      <h2>ngBigParty IV</h2>
      <p>
        <span>
          <strong>March 22</strong> in Prague.
        </span>
        <span>
          <strong>6</strong> Talks.
        </span>
        <span>
          <strong>1</strong> Panel.
        </span>
      </p>
    </section>
  )
}

const DescriptionAndNav = () => {
  return (
    <section className="description ngparty-conf-section">
      <p>
        <span>
          The World of Javascript frameworks is in CHAOS… There is a war
          happening at every corner of your favourite editor… in every tweet,
          people are fighting and arguing that THEIR framework is the best one…
          <br />
          <br />
          Don’t you worry, ngBigParty is here to REunite all fellow developers
          and make peace once and for all by talking about various popular JS
          frameworks by awesome international speakers and far far beyond.
        </span>
        <a
          href="https://www.meetup.com/ngParty/events/235878773/"
          className="reserve-button"
        >
          Sign Up
        </a>
      </p>

      <ul>
        <li>
          <a href="#schedule">Schedule</a>
        </li>
        <li>
          <a href="#speakers">Speakers</a>
        </li>
        <li>
          <a href="#partners">Partners</a>
        </li>
        <li>
          <a href="#location">Location</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </section>
  )
}

const ScheduleKeynote = (props: { time: string }) => {
  const { time } = props
  return (
    <>
      <span className="image multiple">
        <amp-img
          src="https://avatars3.githubusercontent.com/u/82104?v=3&u=6c7fe7d81e39a27d7312bb953f50913a9d740b14&s=200"
          width="100"
          height="100"
          layout="responsive"
        ></amp-img>
      </span>
      <span className="image multiple">
        <amp-img
          src="https://avatars1.githubusercontent.com/u/1223799?v=3&s=200"
          width="100"
          height="100"
          layout="responsive"
        ></amp-img>
      </span>
      <span className="image multiple">
        <amp-img
          src="https://avatars2.githubusercontent.com/u/4021908?v=3&s=200"
          width="100"
          height="100"
          layout="responsive"
        ></amp-img>
      </span>

      <time>{time}</time>
      <div>
        <h5 className="keynote">Opening notes</h5>
        <small>Mario Vejlupek, ngParty (Organiser)</small>
        <small>Martin Hochel, ngParty (Organiser)</small>
        <small>Viliam Elischer, ngParty (Organiser)</small>
        <p>ngBigParty opening.</p>
      </div>
    </>
  )
}
const ScheduleTalk = (props: {
  data: typeof DATA['speakers'][0]
  time: string
}) => {
  const { data, time } = props

  return (
    <>
      <span className="image">
        <amp-img src={data.img} width="100" height="100"></amp-img>
      </span>

      <time>{time}</time>

      <div>
        <h5 className="session">{data.talk.title}</h5>
        <small>
          <a href={`#${data.id}`}>
            {data.name}, {data.company} / {data.country}
          </a>
        </small>
        <p>{data.talk.abstract}</p>
        {data.talk.assets ? (
          <small>
            {data.talk.assets.slides ? (
              <a href={data.talk.assets.slides}>slides</a>
            ) : null}
            {data.talk.assets.demo ? (
              <a href={data.talk.assets.demo}>GITHUB REPOSITORY</a>
            ) : null}
            {data.talk.assets.blog ? (
              <a href={data.talk.assets.blog}>Blog</a>
            ) : null}
          </small>
        ) : null}
      </div>
    </>
  )
}

const Schedule = (props: { data: typeof DATA['speakers'] }) => {
  const { data } = props
  const [andrei, jaroslav, james, tereza, sebastian, david] = data

  return (
    <section className="schedule ngparty-conf-section">
      <div className="wrapper">
        <h3 id="schedule">Schedule</h3>

        <p>All talks will be 15-20 minutes</p>

        <div className="tabs"></div>

        <div className="days">
          <div className="day">
            {/* <h4>March 8th</h4> */}
            <ul className="schedule">
              <li>
                <time>1700</time>
                <div>
                  <h5 className="">Registration</h5>
                </div>
              </li>
              <li className="keynote">
                <ScheduleKeynote time="1730" />
              </li>

              <li className="session">
                <ScheduleTalk data={james} time="1740" />
              </li>

              <li className="session">
                <ScheduleTalk data={david} time="1810" />
              </li>

              <li className="session">
                <ScheduleTalk data={sebastian} time="1830" />
              </li>

              <li>
                <time>1900</time>
                <div>
                  <h5>Dinner break</h5>
                  <p>
                    <br />
                  </p>
                </div>
              </li>

              <li className="session">
                <ScheduleTalk data={tereza} time="1930" />
              </li>

              <li className="session">
                <ScheduleTalk data={andrei} time="2000" />
              </li>

              <li className="session">
                <ScheduleTalk data={jaroslav} time="2030" />
              </li>

              <li className="session">
                <span className="image multiple">
                  <amp-img
                    src="/img/speakers/tereza.jpg"
                    width="100"
                    height="100"
                  ></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img
                    src="/img/speakers/james.jpg"
                    width="100"
                    height="100"
                  ></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img
                    src="/img/speakers/jaroslav.png"
                    width="100"
                    height="100"
                  ></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img
                    src="/img/speakers/andrei.png"
                    width="100"
                    height="100"
                  ></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img
                    src="/img/speakers/david.jpg"
                    width="100"
                    height="100"
                  ></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img
                    src="/img/speakers/sebastian.jpg"
                    width="100"
                    height="100"
                  ></amp-img>
                </span>
                <time>2100</time>
                <div>
                  <h5 className="session">Q&amp;A with speakers</h5>
                  <small>
                    <a href="#tereza">Tereza Sokol, @noredink / DK</a>
                  </small>
                  <small>
                    <a href="#jaroslav">Jaroslav Minařík, MSD / CZ</a>
                  </small>
                  <small>
                    <a href="#andrei">Andrei Pfeiffer, @e_spres_oh / RO</a>
                  </small>
                  <small>
                    <a href="#sebastian">
                      Sebastian Fröstl, @smallimprove / DE
                    </a>
                  </small>
                  <small>
                    <a href="#david">David Durman, @clientIO / CZ</a>
                  </small>
                  <small>
                    <a href="#james">James Henry, @ultimateangular / UK</a>
                  </small>
                  <p>
                    Ask our speakers any question.
                    <br />
                  </p>
                </div>
              </li>
              <li>
                <time>2130</time>
                <div>
                  <h5 className="">After Party</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const Partners = (props: { data: typeof DATA['partners'] }) => {
  const { data } = props

  return (
    <section className="highlight ngparty-conf-section">
      <div className="wrapper">
        <h3 id="partners">Partners</h3>

        <div>
          {data.map((item) => {
            return (
              <div key={item.name} className="image" data-name={item.name}>
                <amp-img
                  src={item.img}
                  width="400"
                  height="83"
                  layout="responsive"
                ></amp-img>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const Speakers = (props: { data: typeof DATA['speakers'] }) => {
  const { data } = props
  return (
    <section className="speakers ngparty-conf-section">
      <div className="wrapper">
        <h3 id="speakers">Speakers</h3>

        <ul className="speakers">
          {data.map((speaker) => {
            return (
              <li key={speaker.id}>
                <span className="image" data-name={speaker.name}>
                  <amp-img
                    src={speaker.img}
                    width="400"
                    height="400"
                    layout="responsive"
                  ></amp-img>
                </span>
                <div>
                  <h4 id={speaker.id}>
                    {speaker.name}, {speaker.company}
                  </h4>
                  <p>{speaker.about}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

const Venue = () => {
  return (
    <section className="highlight ngparty-conf-section">
      <div className="wrapper">
        <amp-iframe
          width="300"
          height="300"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          layout="responsive"
          frameborder="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10239.052383155476!2d14.42587!3d50.0907222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d4a58b12f753e80!2sNoD!5e0!3m2!1sen!2scz!4v1488584674652"
        >
          <p placeholder="">Loading..</p>
        </amp-iframe>
        <div>
          <h3 id="highlight">Location</h3>
          <p>
            NoD (<a href="http://www.nod.roxy.cz/">Website</a>,{' '}
            <a href="https://goo.gl/maps/P7d82gxmDAM2">Google Maps</a>).
          </p>
          <h3>Address</h3>
          <p>
            <span>Dlouhá 33</span>
            <span>110 00 Praha 1-Staré Město</span>
            <span>Prague</span>
            <span>Czech Republic</span>
          </p>
        </div>
      </div>
    </section>
  )
}

const FAQ = () => {
  return (
    <section className="faq ngparty-conf-section">
      <div className="wrapper">
        <h3 id="faq">Frequently Asked Questions</h3>
        <dl>
          <dt>Does it cost anything?</dt>
          <dd>No - tickets are free of charge.</dd>

          <dt>Who is the event for?</dt>
          <dd>Web developers who seek for new technologies and have a fun</dd>

          <dt>When will I hear back if I have a spot?</dt>
          <dd>We'll try to confirm you within less than a week!</dd>
        </dl>
      </div>
    </section>
  )
}
export default BigPartyIV
