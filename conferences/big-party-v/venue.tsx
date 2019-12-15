import { styles } from './venue.styles'

const DATA = {
  map:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10244.036746471234!2d14.4029035!3d50.0673896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55cc039b5fb421f0!2sRadlick%C3%A1%20Kulturn%C3%AD%20Sportovna!5e0!3m2!1sen!2scz!4v1576489381966!5m2!1sen!2scz',
  name: 'Radlická Kulturní Sportovna, Prague',
  address: 'Za Ženskými domovy 125/5, <br />150 00 Praha 5-Smíchov',
  link: 'https://kulturnisportovna.cz',
}

export const Venue = () => {
  return (
    <div className="conf-location">
      <style jsx global>
        {styles}
      </style>
      <div className="conf-location-visual">
        {/* <h3 className="ap-m-conf-location-headline">Location</h3> */}
        <div className="conf-location-map">
          <amp-iframe
            width="330"
            height="330"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            layout="responsive"
            frameborder="0"
            src={DATA.map}
          ></amp-iframe>
        </div>
      </div>
      <div className="conf-location-content">
        <a className="conf-location-content-link" href={DATA.link}>
          {DATA.name}
        </a>
        <p
          className="conf-location-content-text"
          dangerouslySetInnerHTML={{ __html: DATA.address }}
        ></p>
      </div>
    </div>
  )
}
