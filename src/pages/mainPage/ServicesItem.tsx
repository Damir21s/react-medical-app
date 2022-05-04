import React from "react"
import { Line } from "../../styled/Line"

interface ServicesItemProps {
  title: string
  text: string
  img: string
}
export const ServicesItem: React.FC<ServicesItemProps> = ({ title, text, img }) => {
  return (
      <section>
        <img alt='icon' src={img} />
        <h3>{title}</h3>
        <Line borderb='2px solid var(--color-orange)' widht='50px' />
        <p>{text}</p>
      </section>
  )
}