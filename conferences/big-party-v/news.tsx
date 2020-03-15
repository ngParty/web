import { styles } from './news.styles'

export const News = () => {
  return (
    <section className="news">
      <Covid19 />
      <style jsx>{styles}</style>
    </section>
  )
}

const Covid19 = () => {
  return (
    <article>
      <h2>🚨 Coronavirus update</h2>
      <p>
        We`ve been closely monitoring the situation with the spread of the
        coronavirus, both in Czech Republic and world-wide. Unfortunately, the
        situation became very serious and is affecting a lot of events and will
        definitely affect ngBigParty V. Whatever the outcome, our first priority
        is to ensure that any activity we do is risk free and the health of the
        people around the event is our top priority at the moment.
      </p>

      <p>
        As of today (16.03.2020), the Czech government closed state borders and
        declared a state of emergency for the upcoming 30 days…
      </p>

      <p>
        With that said,{' '}
        <b>ngBigParty V is now officially postponed to another date.</b>
      </p>
      <p>
        The event will take place somewhere in the autumn season, depending on
        speakers availability with possible line-up modifications. We will be in
        touch with you, the community, about all relevant info regarding the new
        date.
      </p>

      <h3>Tickets</h3>
      <p>
        We will automatically transfer all purchased conference tickets to the
        next event.
      </p>

      <p>
        If you'll have any further questions, ping us on social media or via
        email.
      </p>
      <p>Best, ngParty Team</p>
    </article>
  )
}
