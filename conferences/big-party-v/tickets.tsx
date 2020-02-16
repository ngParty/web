import { styles } from './tickets.styles'
import { data } from '../../shared'
import { links } from './data'
import { A } from './shared'

interface TicketModel {
  type: string
  price: number
  currency: string
  vatPercentage?: number
  link: {
    individual: string
    invoice: string
  }
  description: string
  /**
   * active until
   */
  date: string
  soldOut: boolean
}

const currDate = new Date()
const DATA: TicketModel[] = [
  {
    type: 'Early bird',
    link: {
      individual: links.tickets,
      invoice: links.ticketsInvoice,
    },
    currency: 'CZK',
    price: 2350,
    vatPercentage: 0,
    date: '2020-02-04T07:00:00.000Z',
    soldOut: true,
    description: `A limited selection of early bird tickets.
    Ticket price includes all refreshments and food during the conference, as well as entrance to the after-party get-together.`,
  },
  {
    type: 'Regular',
    link: {
      individual: links.tickets,
      invoice: links.ticketsInvoice,
    },
    currency: 'CZK',
    price: 3450,
    vatPercentage: 0,
    date: '2020-03-24T22:59:00.000Z',
    soldOut: false,
    description: `The standard ticket for ngBigParty V provides you with a full day of JavaScript content and includes all refreshments and food during the conference, as well as entrance to the after-party get-together.`,
  },
  {
    type: 'Late bird',
    link: {
      individual: links.tickets,
      invoice: links.ticketsInvoice,
    },
    currency: 'CZK',
    price: 4550,
    vatPercentage: 0,
    date: '2020-04-07T06:59:00.000Z',
    soldOut: false,
    description: `Made your decision on short notice and missed the Early Bird and
    Regular Tickets? No worries! There is never to late for solid JavaScript content right? We still have some seats left.
    Ticket price includes all refreshments and food during the conference, as well as entrance to the after-party get-together.`,
  },
]

export const Tickets = () => {
  return (
    <>
      <div className="tickets">
        <style jsx global>
          {styles}
        </style>
        <ul className="ticket-list">
          {DATA.map((item) => {
            const { description, ...data } = item
            return (
              <li key={item.type}>
                <Ticket {...data}>{description}</Ticket>
              </li>
            )
          })}
        </ul>
        <section className="ticket-info">
          <h3>All conference tickets include:</h3>
          <ul className="list-check">
            <li>Conference access on the 7th of April (Tuesday)</li>
            <li>Swag bag (ngParty and partners swag included!)</li>
            <li>Coffee, water and beverages</li>
            <li>Lunch, including vegetarian and vegan options</li>
            <li>Snacks during coffee breaks</li>
            <li>After party access (Tuesday evening)</li>
          </ul>
        </section>
        <section className="ticket-info-bulk">
          <h2>Invoice/Bulk Tickets for Companies</h2>
          <p className="text-content">
            Best community event happens when like-minded people get together
            🥳. So if you want to purchase ngBigParty tickets for an entire
            crew, please use following{' '}
            <A
              href={links.ticketsInvoice}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              order ticket by invoice form
            </A>{' '}
            or contact us directly by{' '}
            <A
              className="link"
              href={`${data.links.contact.email.link}?subject=Bulk tickets request`}
            >
              sending an e-mail
            </A>{' '}
            with the details.
          </p>
          <p className="text-content">We’ll be prompt to answer!</p>
        </section>
      </div>
    </>
  )
}

const Ticket = (
  props: Omit<TicketModel, 'description'> & { children: React.ReactChild }
) => {
  const {
    type,
    children,
    price,
    currency,
    vatPercentage,
    link,
    date,
    soldOut,
  } = props
  const normalizedVAT = vatPercentage
    ? `incl. ${vatPercentage}% VAT`
    : 'incl. all fees'
  const normalizedAmount = `${price} ${currency}`
  const dateBoundary = new Date(date)
  const isDisabled = soldOut || currDate > dateBoundary

  const cx = {
    containerDisabled: isDisabled ? 'disabled' : '',
  }

  return (
    <div className={`ticket ${cx.containerDisabled}`} tabIndex={0}>
      <div className="ticket-type">
        <h3 className="ticket-type__title">{type}</h3>
        <span className="ticket-type__date">until {formatDate(date)}</span>
      </div>
      <div className="ticket-description">
        <p>{children}</p>
      </div>
      <div className="ticket-price">
        <span className="ticket-price__amount">{normalizedAmount}</span>
        <span className="ticket-price__fees">{normalizedVAT}</span>
      </div>
      <div className={`ticket-actions-container ${cx.containerDisabled}`}>
        {!isDisabled ? (
          <>
            <A
              href={link.individual}
              className="ticket-action ticket-action--primary block p-4 mt-6"
            >
              Buy now
            </A>
            <A
              href={link.invoice}
              className="ticket-action ticket-action--secondary"
            >
              order by invoice <span aria-label="invoice-icon">🧾</span>
            </A>
          </>
        ) : soldOut ? (
          <>
            sold
            <br />
            out
          </>
        ) : (
          <>ended</>
        )}
      </div>
    </div>
  )
}

// ========
// UTILS
// ========

function formatDate(date: string) {
  const dateInst = new Date(date)
  const options = {
    // weekday: 'long',
    // year: 'numeric',
    month: 'long',
    // day: 'numeric'
  }

  const pr = new Intl.PluralRules('en-US', { type: 'ordinal' })
  const prOrderMap = {
    other: 'th',
    one: 'st',
    two: 'nd',
    few: 'rd',
  }
  const dayNumber = dateInst.getDate()

  const month = new Intl.DateTimeFormat('en-GB', options).format(dateInst)
  const day = `${dayNumber}${
    prOrderMap[pr.select(dayNumber) as keyof typeof prOrderMap]
  }`

  return `${day} of ${month}`
}
