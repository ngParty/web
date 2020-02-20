import { styles } from './venue.styles'

const DATA = {
  map:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.1633323616443!2d14.447139915587272!3d50.10194972029567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94b1a6b253bd%3A0xb18c9912314fcb65!2sVNITROBLOCK!5e0!3m2!1sen!2scz!4v1582237337459!5m2!1sen!2scz',
  name: 'Vnitroblock - event hall, Prague',
  address: 'Tusarova 791/31<br />Praha 7 – Holešovice, Praha 7',
  link: 'https://vnitroblock.cz/',
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
