import * as data from './data'

import { styles, aboutNumbersStyles, ticketsStyles } from './intro.styles'

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
  about: `ngBigParty is the JavaScript conference for everyone. We roam on the
  edges of the ecosystem to see what lies beyond our day to day work.
  To become better developers and better humans. We are independent,
  community-driven, affordable and inclusive.`,
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
                {DATA.date} <br /> {DATA.city}
              </p>
            </div>
            <p
              className="conf-theme"
              dangerouslySetInnerHTML={{ __html: DATA.theme }}
            />
          </div>
        </section>

        <section className="about">
          <p className="about-content">{DATA.about}</p>
          <AboutInNumbers data={DATA.aboutInNumbers} />
          <Tickets id="tickets" enable={data.config.enableTickets} />
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

const Tickets = (props: { id: string; enable: boolean }) => {
  const { enable, id } = props

  return (
    <div id={id} className="about-action">
      <style jsx>{ticketsStyles}</style>
      {enable ? (
        <a className="btn btn--accent" href="" target="_blank">
          Get Tickets
        </a>
      ) : (
        <button className="btn btn--accent" disabled>
          Tickets available soon...
        </button>
      )}
    </div>
  )
}
