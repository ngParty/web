import { styles } from './section.styles'

type Props = {
  id: string
  title: string
  children: React.ReactElement | React.ReactElement[]
}
export const Section = (props: Props) => {
  const { children, id, title } = props
  return (
    <section className="section" id={id}>
      <style jsx global>
        {styles}
      </style>
      <div className="section-title">
        <h1>{title}</h1>
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}
