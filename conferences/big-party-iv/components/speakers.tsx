import { data as DATA } from '../data'

export const Speakers = (props: { data: typeof DATA['speakers'] }) => {
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
