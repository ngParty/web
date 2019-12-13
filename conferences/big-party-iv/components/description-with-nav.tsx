import { data as DATA } from '../data'

export const DescriptionAndNav = (props: { data: typeof DATA['links'] }) => {
  const { data } = props
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
        <a href={data.signUp} className="btn__sign-up">
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
