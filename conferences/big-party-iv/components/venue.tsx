export const Venue = () => {
  return (
    <section className="highlight ngparty-conf-section">
      <div className="wrapper">
        <amp-iframe
          width="300"
          height="300"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          layout="responsive"
          frameborder="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10239.052383155476!2d14.42587!3d50.0907222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d4a58b12f753e80!2sNoD!5e0!3m2!1sen!2scz!4v1488584674652"
        >
          <p placeholder="">Loading..</p>
        </amp-iframe>
        <div>
          <h3 id="highlight">Location</h3>
          <p>
            NoD (<a href="http://www.nod.roxy.cz/">Website</a>,{' '}
            <a href="https://goo.gl/maps/P7d82gxmDAM2">Google Maps</a>).
          </p>
          <h3>Address</h3>
          <p>
            <span>Dlouhá 33</span>
            <span>110 00 Praha 1-Staré Město</span>
            <span>Prague</span>
            <span>Czech Republic</span>
          </p>
        </div>
      </div>
    </section>
  )
}
