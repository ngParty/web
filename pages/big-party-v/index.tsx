import {
  Schedule,
  Layout,
  Section,
  Venue,
  Header,
  Footer,
  theme,
  Sponsors,
  Intro,
  Speakers,
  Organizers,
  Faq,
} from '../../conferences/big-party-v'

export const config: import('next').PageConfig = { amp: true }

const BigPartyV = () => {
  return (
    <>
      <style jsx global>{`
        .ap-main {
          margin-top: ${theme.sizes.headerHeight};
        }
      `}</style>
      <Layout
        title="ngBigParty V - JavaScript age of compilers and AI"
        ampDependencies={
          <>
            <script
              async
              custom-element="amp-iframe"
              src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
            />
            <script
              async
              custom-element="amp-sidebar"
              src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
            />
            <script
              async
              custom-element="amp-lightbox"
              src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
            />
          </>
        }
      >
        <Header />

        <main className="ap-main">
          <Intro />
          <Section title="Speakers" id="speakers">
            <Speakers />
          </Section>
          <Section title="Schedule" id="schedule">
            <Schedule />
          </Section>
          <Section title="Venue" id="venue">
            <Venue />
          </Section>
          <Section title="Supporters" id="supporters">
            <Sponsors />
          </Section>
          <Section title="Frequently asked questions" id="faq">
            <Faq />
          </Section>
          <Section title="Organizers" id="organizers">
            <Organizers />
          </Section>
        </main>

        <Footer />
      </Layout>
    </>
  )
}

export default BigPartyV
