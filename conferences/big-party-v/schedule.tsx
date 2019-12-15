import { styles } from './schedule.styles'
export const Schedule = () => {
  return (
    <div className="ap-o-agenda">
      <style jsx global>
        {styles}
      </style>
      <ul className="ap-o-agenda-content-list conf">
        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers"></div>
          <div className="ap-m-agenda-item-time">0800</div>
          <div className="ap-m-agenda-item-description  ">
            <div className="ap-m-agenda-item-description-title  ">
              Registration
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Crystal Lambert"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Yusuke Utsunomiya"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">0930</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              Opening Notes
            </div>

            <a
              href="#crystallambert"
              className="ap-m-agenda-item-description-speaker"
            >
              Crystal Lambert, Google
            </a>
            <br />
            <a
              href="#yusukeutsunomiya"
              className="ap-m-agenda-item-description-speaker"
            >
              Yusuke Utsunomiya, Google
            </a>
            <br />

            <div className="ap-m-agenda-item-description-text">
              Welcome to AMP Conf 2019!
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image"
              alt="Profile picture for Malte Ubl"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">0945</div>
          <div className="ap-m-agenda-item-description  keynote">
            <div className="ap-m-agenda-item-description-title  keynote">
              Keynote
            </div>

            <a
              href="#malteubl"
              className="ap-m-agenda-item-description-speaker"
            >
              Malte Ubl, Google
            </a>

            <div className="ap-m-agenda-item-description-text">OMG</div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image"
              alt="Profile picture for Kristofer Baxter"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1030</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              The glory of amp-script: Unleashing the kraken
            </div>

            <a href="#kbax" className="ap-m-agenda-item-description-speaker">
              Kristofer Baxter, Google
            </a>

            <div className="ap-m-agenda-item-description-text">
              AMP Documents have traditionally not allowed for custom
              JavaScript, relying on the well built large corpus of Web
              Components designed and validated to work within AMP. Today, we
              release the Kraken. We’ll introduce `amp-script`, allowing your
              custom JavaScript to operate within AMP Documents with reasonable
              limits. Now your custom logic can be expressed with the world’s
              most popular programming language.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers"></div>
          <div className="ap-m-agenda-item-time">1100</div>
          <div className="ap-m-agenda-item-description  ">
            <div className="ap-m-agenda-item-description-title  ">
              Coffee Break
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image"
              alt="Profile picture for Melissa DePuydt"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1130</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              Everything I Know I Learned from AMP: Adopting an AMP Core Mindset
            </div>

            <a
              href="#melissadepuydt"
              className="ap-m-agenda-item-description-speaker"
            >
              Melissa DePuydt, WaPo
            </a>

            <div className="ap-m-agenda-item-description-text">
              Too often, engineers view AMP as "just one more thing to
              implement." In reality, AMP provides engineers with a series of
              guiding principles that can help them deliver more performant
              websites—even when it comes to non-AMP pages. So, what would
              happen if teams began to think with an AMP Core Mindset? In this
              talk, we will explore AMP's core design principles and unpack how
              businesses can (and should!) incorporate these principles into all
              aspects of their decision making, in order to help teams align on
              goals and make better decisions at every level.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image"
              alt="Profile picture for Andrew Watterson"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1200</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              How We Make AMP Components a Great Experience for Everyone
              (Including Developers!)
            </div>

            <a
              href="#andrewwatterson"
              className="ap-m-agenda-item-description-speaker"
            >
              Andrew Watterson, Google
            </a>

            <div className="ap-m-agenda-item-description-text">
              A designer from the AMP team talks about how we go from feature
              requests to shipping components with great documentation. We draw
              up many versions of a feature to match the many ways AMP is used.
              We sit in cafes and talk to your users about how they use the web,
              and make changes based on their feedback. And since you are *our*
              users, we want to talk to you about how you work and how future
              AMP components can make your sites even better.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers"></div>
          <div className="ap-m-agenda-item-time">1230</div>
          <div className="ap-m-agenda-item-description  ">
            <div className="ap-m-agenda-item-description-title  ">Lunch</div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image"
              alt="Profile picture for Sebastian Benz"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1430</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              amp.dev live!
            </div>

            <a
              href="#sebastianbenz"
              className="ap-m-agenda-item-description-speaker"
            >
              Sebastian Benz, Google
            </a>

            <div className="ap-m-agenda-item-description-text">
              Live coding! See how to use the latest and greatest AMP features.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Kiyotaka Oku"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Mitsuhiro Naganuma"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1500</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              Next generation UX of EC-Cube, powered by AMP
            </div>

            <a
              href="#kiyotakaoku"
              className="ap-m-agenda-item-description-speaker"
            >
              Kiyotaka Oku, EC-CUBE
            </a>
            <br />
            <a
              href="#mitsuhironaganuma"
              className="ap-m-agenda-item-description-speaker"
            >
              Mitsuhiro Naganuma, SUNDAY SYSTEMS, Inc.
            </a>
            <br />

            <div className="ap-m-agenda-item-description-text">
              A PHP based CMS with more than 1.8M downloads and 30K+ live
              merchants, EC-CUBE now uses AMP to satisfy the UX of their end
              users. This session covers the journey of EC-CUBE AMPing their
              platform starting from converting existing Twig template to
              eventually making the site PWA using AMP. The general essence of
              how EC-CUBE adapted AMP into existing platform should be useful
              for not only CMSers but broader Web developers.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image"
              alt="Profile picture for Perry Lally"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1515</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              Embracing a Mobile First Approach
            </div>

            <a
              href="#perrylally"
              className="ap-m-agenda-item-description-speaker"
            >
              Perry Lally, George.com
            </a>

            <div className="ap-m-agenda-item-description-text">
              The evolution of George.com, how a retail giant has to shift
              mentality and adopt a mobile first approach. Site speed is king,
              and how do you ensure you win in this category and win for the
              customer.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Jon Newmuis"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Wei Hong"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1530</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              AMP Stories: The Story so far
            </div>

            <a
              href="#jonnewmuis"
              className="ap-m-agenda-item-description-speaker"
            >
              Jon Newmuis, Google
            </a>
            <br />
            <a href="#weihong" className="ap-m-agenda-item-description-speaker">
              Wei Hong, Google
            </a>
            <br />

            <div className="ap-m-agenda-item-description-text">
              Join us for a whirlwind tour through everything new in AMP
              Stories. More details coming soon.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers"></div>
          <div className="ap-m-agenda-item-time">1600</div>
          <div className="ap-m-agenda-item-description  ">
            <div className="ap-m-agenda-item-description-title  ">
              Coffee Break
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Tommy Kang"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Jinhyoung Kil"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1630</div>
          <div className="ap-m-agenda-item-description session">
            <div className="ap-m-agenda-item-description-title  session">
              Providing AMP service to tens of thousands of ecommerce sites
            </div>

            <a
              href="#tommykang"
              className="ap-m-agenda-item-description-speaker"
            >
              Tommy Kang, Cafe24
            </a>
            <br />
            <a
              href="#jinhyoungkil"
              className="ap-m-agenda-item-description-speaker"
            >
              Jinhyoung Kil, Cafe24
            </a>
            <br />

            <div className="ap-m-agenda-item-description-text">
              Introduce a journey of ‘cafe24’ from the early stage of its
              business to growing as a successful leading ecommerce platform.
              Describe a true meaning of AMP adaptation to ecommerce platform
              and how it could bring useful insights for the purpose of driving
              positive business change for both market and user from a platform
              provider point of view. Explain our e-commerce platform structure
              including the main CMS and the details of our AMP plugin along
              with the overall project in the presentation. Shows a demo to
              visualize a smooth AMP to AMP navigation and a visual comparison
              between non-AMP page and a pre rendered paired AMP page in
              WebPageTest. Lastly add comments on our next plan about leveraging
              AMP and key PWA technologies (which had been already launched and
              used by many of our merchants) in our business strategy as well as
              our upcoming plan in big picture.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Levi Clancy"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Balla Khadang"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1645</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              No power, no internet, no support: How AMP bridges the “app gap”
              in Iraq and other war-impacted region
            </div>

            <a
              href="#leviclancy"
              className="ap-m-agenda-item-description-speaker"
            >
              Levi Clancy, Re:Coded
            </a>
            <br />
            <a
              href="#ballakhadang"
              className="ap-m-agenda-item-description-speaker"
            >
              Balla Khadang, YouGov
            </a>
            <br />

            <div className="ap-m-agenda-item-description-text">
              At the fringes of conventional considerations, users in
              war-impacted regions face restrictive app policies, incompatible
              u.x. assumptions, limited bandwidth, and little or no household
              electricity. AMP provides a toolkit to implement app-like,
              mobile-friendly, and quick-loading experiences that connect with
              users on the far side the “app gap” of access, infrastructure, and
              design. Gain a practical understanding of this poorly understood
              but highly impactful facet of design and implementation.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image"
              alt="Profile picture for Rudy Galfi"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1715</div>
          <div className="ap-m-agenda-item-description  session">
            <div className="ap-m-agenda-item-description-title  session">
              What's next in AMP
            </div>

            <a
              href="#rudygalfi"
              className="ap-m-agenda-item-description-speaker"
            >
              Rudy Galfi, Google
            </a>

            <div className="ap-m-agenda-item-description-text">
              In this presentation, we wrap up the day with a summary of all of
              the key focus areas for AMP and talk about what the extended
              roadmap looks like.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers">
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Crystal Lambert"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Chris Papazian"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for David Strauss"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Dima Voytenko"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Malte Ubl"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Paul Armstrong"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Rudy Galfi"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
            <amp-img
              className="ap-m-agenda-item-image multiple"
              alt="Profile picture for Saulo Santos"
              src="https://amp.dev/static/img/amp-conf/speakers/amp.png"
              layout="fixed"
              height="50px"
              width="50px"
            ></amp-img>
          </div>
          <div className="ap-m-agenda-item-time">1730</div>
          <div className="ap-m-agenda-item-description  panel">
            <div className="ap-m-agenda-item-description-title  panel">
              TSC Panel
            </div>
            <a
              href="#crystallambert"
              className="ap-m-agenda-item-description-speaker"
            >
              Crystal Lambert, Google
            </a>{' '}
            (Moderator)
            <br />
            <a
              href="#chrispapazian"
              className="ap-m-agenda-item-description-speaker"
            >
              Chris Papazian, Pinterest
            </a>
            <br />
            <a
              href="#davidstrauss"
              className="ap-m-agenda-item-description-speaker"
            >
              David Strauss, Pantheon
            </a>
            <br />
            <a
              href="#dimavoytenko"
              className="ap-m-agenda-item-description-speaker"
            >
              Dima Voytenko, Google
            </a>
            <br />
            <a
              href="#malteubl"
              className="ap-m-agenda-item-description-speaker"
            >
              Malte Ubl, Google
            </a>
            <br />
            <a
              href="#paularmstrong"
              className="ap-m-agenda-item-description-speaker"
            >
              Paul Armstrong, Twitter
            </a>
            <br />
            <a
              href="#rudygalfi"
              className="ap-m-agenda-item-description-speaker"
            >
              Rudy Galfi, Google
            </a>
            <br />
            <a
              href="#saulosantos"
              className="ap-m-agenda-item-description-speaker"
            >
              Saulo Santos, Microsoft
            </a>
            <br />
            <div className="ap-m-agenda-item-description-text">
              Ask the new Technical Steering Committee of AMP any questions you
              have about the past, present and future of AMP.
            </div>
          </div>
        </li>

        <li className="ap-m-agenda-item">
          <div className="ap-m-agenda-item-speakers"></div>
          <div className="ap-m-agenda-item-time">1800</div>
          <div className="ap-m-agenda-item-description  ">
            <div className="ap-m-agenda-item-description-title  ">Party!</div>
          </div>
        </li>
      </ul>
    </div>
  )
}
