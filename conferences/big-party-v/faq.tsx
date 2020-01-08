import { styles } from './faq.styles'

interface FaqModel {
  question: string
  answer: string
}

const DATA: FaqModel[] = [
  {
    question: 'Who is the event for?',
    answer: `Web developers of all skill levels, mainly focused on JavaScript. Main purpose of this event is to get our community together and have a chance to interact with international web technology experts on the stage.
    This edition topic is "Javascript, the Age of compilers and A.I.".
    You as a JavaScript developer will have an unique opportunity to extended your skill set by learning other multi platform languages that gives you another set of superpowers and that compile to JavaScript, thus can be used on the Web.
    Beside that our talks will include A.I. related content with JavaScript and other valuable information that you can leverage on daily basis at work.`,
  },
  {
    question: 'What language will the talks be in?',
    answer: 'All talks are being presented in English.',
  },
  {
    question: 'Is there gonna be a live-stream?',
    answer: `No. One of main reasons why we're organizing these events, is a community get-together.`,
  },
  {
    question: 'Is there gonna be a recordings of all the talks?',
    answer: `Yes. We'll have professional team to make the recording which will be available online after the conference.`,
  },
  {
    question: 'Does it cost anything?',
    answer: `Yes. Although this is a non profit community event, we need funds to make it happen.`,
  },
  {
    question: 'Will it possible to buy batch tickets?',
    answer: `Yes. Please drop us an email.`,
  },
  {
    question: 'Will there be CFP?',
    answer: `No. We are doing our own research and handpicking all speakers personally.`,
  },
  {
    question: 'Is this conference only about Angular?',
    answer: `No. While ng is known as Angular abbreviation in the JS world ngParty stands for NextGeneration Party.`,
  },
  {
    question: 'I found a bug on this web, how can I report it?',
    answer: `Everything we do is for community, thus this web is open sourced! Please fill an issue or send a PR! ❤️`,
  },
]

export const Faq = () => {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <ul className="faq-content">
        {DATA.map((item) => {
          return (
            <li className="faq-content-item" key={item.question}>
              <FaqItem {...item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

const FaqItem = (props: FaqModel) => {
  const { answer, question } = props
  return (
    <>
      <p className="faq-content-question">{question}</p>
      <p className="faq-content-answer">{answer}</p>
    </>
  )
}
