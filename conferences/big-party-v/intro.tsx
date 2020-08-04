import * as data from './data'
import { styles, aboutNumbersStyles, ticketsStyles } from './intro.styles'
import { Gallery } from './gallery'
import { A } from './shared'

const DATA = {
  title: 'ngBigParty V',
  date: 'April 7 2020',
  city: 'Prague',
  theme: `JavaScript
  <br />
  Age of compilers
  <br /> and A.I.`,
  aboutInNumbers: {
    day: 1,
    track: 1,
    speaker: 10,
  },
  about: `ngBigParty is the largest community conference focused on JavaScript in Czechia.
  The 5th edition will feature international experts with in-depth talks about various next-generation topics from JavaScript world focused on compilers and A.I.<br/>
  Join us for an unforgettable day full of technology, networking with local community and much more in beautiful Prague!
  `,
}

export const Intro = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="intro" id="about">
        <section className="intro-bg">
          <div className="conf">
            <div className="conf-intro">
              <h1 className="conf-intro__title">{DATA.title}</h1>
              <p className="conf-intro__date">
                <span className="line-through">{DATA.date}</span>
                <br />
                <span>{DATA.city}</span>
              </p>
            </div>
            <p
              className="conf-theme"
              dangerouslySetInnerHTML={{ __html: DATA.theme }}
            />
          </div>
        </section>
        <section className="center uppercase">
          <A className="btn btn--accent" href="#news">
            🚨 The conference is canceled - Read more 🚨
          </A>
        </section>
        <section className="about">
          <p
            className="about-content"
            dangerouslySetInnerHTML={{ __html: DATA.about }}
          />
          <AboutInNumbers data={DATA.aboutInNumbers} />
          {/* <Tickets
            enable={data.config.enableTickets}
            link={data.navigation.secondary[0].link}
          /> */}
        </section>

        <section className="gallery">
          <Gallery />
        </section>
      </div>
    </>
  )
}

const AboutInNumbers = (props: { data: Record<string, number> }) => {
  const { data } = props
  const content = normalizeAboutNumbersData(data)

  return (
    <>
      <style jsx>{aboutNumbersStyles}</style>
      <ul className="about-numbers">
        {content.map((item) => {
          return (
            <li key={item.label}>
              <strong>{item.amount}</strong>
              <span>{item.label}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
const normalizeAboutNumbersData = (value: Record<string, number>) => {
  return Object.entries(value).map(([keyName, count]) => {
    return { label: pluralize(keyName, count), amount: count }
  })
}
const pluralize = (word: string, count: number) => {
  return count > 1 ? `${word}s` : word
}

const Tickets = (props: { enable: boolean; link: string }) => {
  const { enable, link } = props

  return (
    <div className="about-action">
      <style jsx>{ticketsStyles}</style>
      {enable ? (
        <A className="btn btn--accent" href={link}>
          Get Tickets
        </A>
      ) : (
        <button className="btn btn--accent" disabled>
          Tickets available soon...
        </button>
      )}
    </div>
  )
}
