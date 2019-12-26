import { styles } from './faq.styles'

interface FaqModel {
  question: string
  answer: string
}

const DATA: FaqModel[] = [
  {
    question: 'Who is the event for?',
    answer: `Web developers and designers who have used AMP and want to create
    even better AMP experiences, who haven't used AMP and are curious or
    want to contribute to AMP to make it better for everyone, and the
    web at large.`,
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
    answer: `Yes. Although this is a community event so ticket prices will be very affordable.`,
  },
  {
    question: 'Will it possible to buy batch tickets?',
    answer: `Yes. Please drop us an email.`,
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
