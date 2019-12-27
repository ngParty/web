import {
  data as DATA,
  Layout,
  About,
  DescriptionAndNav,
  Speakers,
  Venue,
  FAQ,
  Schedule,
  Partners,
  Footer,
} from '../../conferences/big-party-iv'

export const config: import('next').PageConfig = { amp: true }

const BigPartyIV = () => {
  return (
    <>
      <Layout
        title="ngBigParty IV - JavaScript Re-united"
        ampDependencies={
          <>
            <script
              async
              custom-element="amp-sidebar"
              src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
            />
            <script
              async
              custom-element="amp-accordion"
              src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
            />
            <script
              async
              custom-element="amp-analytics"
              src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
            />
            <script
              async
              custom-element="amp-install-serviceworker"
              src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"
            />
            <script
              async
              custom-element="amp-form"
              src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
            />
            <script
              async
              custom-element="amp-iframe"
              src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
            />
          </>
        }
      >
        {/* <amp-analytics type="googleanalytics" id="analytics-ga">
    <script type="application/json">
      {
      "vars": {
        "account": "UA-74292133-4"
      },
      "triggers": {
        "trackPageview": {
          "on": "visible",
          "request": "pageview"
        }
      }
    }
    </script>
  </amp-analytics> */}
        <div className="main-background" />

        <div className="wrap">
          <div className="content">
            <About />

            <DescriptionAndNav data={DATA.links} />

            <Schedule data={DATA.speakers} />

            <Partners data={DATA.partners} />

            <Speakers data={DATA.speakers} />

            <Venue />

            <FAQ />

            <Footer data={DATA.links} />
            {/* <amp-install-serviceworker src="/service-worker.js" layout="nodisplay"></amp-install-serviceworker> */}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BigPartyIV
