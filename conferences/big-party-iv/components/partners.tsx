import { data as DATA } from '../data'

type PartnerModel = typeof DATA['partners'][0]

export const Partners = (props: { data: PartnerModel[] }) => {
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
