import { data as DATA } from '../data'

type SpeakerModel = typeof DATA['speakers'][0]

export const Schedule = (props: { data: SpeakerModel[] }) => {
  const { data } = props
  const [andrei, jaroslav, james, tereza, sebastian, david] = data
  const ampImgProps = {
    width: '100',
    height: '100',
    layout: 'responsive',
  }

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
                    Take a break! Enjoy complimentary dinner from our partners!
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
                  <amp-img src={tereza.img} {...ampImgProps}></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img src={james.img} {...ampImgProps}></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img src={jaroslav.img} {...ampImgProps}></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img src={andrei.img} {...ampImgProps}></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img src={david.img} {...ampImgProps}></amp-img>
                </span>
                <span className="image multiple">
                  <amp-img src={sebastian.img} {...ampImgProps}></amp-img>
                </span>
                <time>2100</time>
                <div>
                  <h5 className="session">Q&amp;A with speakers</h5>
                  <ScheduleTalkSpeakerTitle data={tereza} />
                  <ScheduleTalkSpeakerTitle data={jaroslav} />
                  <ScheduleTalkSpeakerTitle data={andrei} />
                  <ScheduleTalkSpeakerTitle data={sebastian} />
                  <ScheduleTalkSpeakerTitle data={david} />
                  <ScheduleTalkSpeakerTitle data={james} />
                  <p>
                    Ask our speakers any question during our panel discussion
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
      <style jsx global>{`
        .speaker-assets {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
        }
        .speaker-assets > a {
          transition: box-shadow ease-out 250ms;
          padding: 0.5em;
        }
        .speaker-assets > a:hover,
        .speaker-assets > a:focus {
          color: #0d47a1;
          box-shadow: 0 0 2px #607d8b87;
        }
        .speaker-assets > :first-child {
          margin-left: -0.5em;
        }
        .speaker-link {
          display: block;
          line-height: 1.6em;
        }
      `}</style>
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
        <small className="speaker-link">
          Mario Vejlupek, ngParty (Organiser)
        </small>
        <small className="speaker-link">
          Martin Hochel, ngParty (Organiser)
        </small>
        <small className="speaker-link">
          Viliam Elischer, ngParty (Organiser)
        </small>
        <p>
          ngBigParty conference keynote opening. "For community. By community."
        </p>
      </div>
    </>
  )
}

const ScheduleTalk = (props: { data: SpeakerModel; time: string }) => {
  const { data, time } = props

  return (
    <>
      <span className="image">
        <amp-img src={data.img} width="100" height="100"></amp-img>
      </span>

      <time>{time}</time>

      <div>
        <ScheduleTalkSpeaker data={data} />
        {data.talk.assets ? (
          <small className="speaker-assets">
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

const ScheduleTalkSpeaker = (props: { data: SpeakerModel }) => {
  const { data } = props

  return (
    <>
      <h5 className="session">{data.talk.title}</h5>
      <ScheduleTalkSpeakerTitle data={data} />
      <p>{data.talk.abstract}</p>
    </>
  )
}

const ScheduleTalkSpeakerTitle = (props: { data: SpeakerModel }) => {
  const { data } = props
  return (
    <small className="speaker-link">
      <a href={`#${data.id}`}>
        {data.name}, {data.company} / {data.country}
      </a>
    </small>
  )
}
