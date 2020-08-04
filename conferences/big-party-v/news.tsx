import { styles } from './news.styles'
import Link from 'next/link'

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
    <>
      <article>
        <h2>
          🚨 Event Cancelled <small title="date">Aug 4th 2020</small>
        </h2>
        <p>
          In the midst of the current COVID-19 pandemic, we were all faced with
          several tough decisions. We were optimistic that the situation will
          get better soon and we'll be able to do the event in Q3/4 this year.
          After a long wait and careful monitoring the situation, we had to make
          the toughest decision event organizers can make.
        </p>
        <p>
          We’re very sorry to let you know ngBigParty V is cancelled, which we
          believe is this is the wise and correct decision.
        </p>

        <h3>Tickets</h3>
        <p>
          We will refund all purchased conference tickets in 2 upcoming weeks.
        </p>

        <h3>Tickets purchased via Goout</h3>
        <p>
          To get your money back instead of issued voucher, you'll need to write
          to Goout directly.
        </p>
        <p>
          ✅ We've{' '}
          <Link href="https://bit.ly/goout-ticket-refund-template">
            prepared this template for you
          </Link>
          .
        </p>
        <p>Let us know if there will be any further issues.</p>

        <hr />

        <p>We’ll be back in 2021. Thank you for your support ❤️.</p>
        <p>Best, ngParty Team</p>
      </article>

      <article>
        <h2>
          🚨 Coronavirus update <small title="date">Mar 15th 2020</small>
        </h2>
        <p>
          We`ve been closely monitoring the situation with the spread of the
          coronavirus, both in Czech Republic and world-wide. Unfortunately, the
          situation became very serious and is affecting a lot of events and
          will definitely affect ngBigParty V. Whatever the outcome, our first
          priority is to ensure that any activity we do is risk free and the
          health of the people around the event is our top priority at the
          moment.
        </p>

        <p>
          As of today (16.03.2020), the Czech government closed state borders
          and declared a state of emergency for the upcoming 30 days…
        </p>

        <p>
          With that said,
          <b>ngBigParty V is now officially postponed to another date.</b>
        </p>
        <p>
          The event will take place somewhere in the autumn season, depending on
          speakers availability with possible line-up modifications. We will be
          in touch with you, the community, about all relevant info regarding
          the new date.
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
    </>
  )
}
