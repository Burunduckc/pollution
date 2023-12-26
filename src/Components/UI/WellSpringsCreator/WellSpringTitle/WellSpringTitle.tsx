import { FC } from 'react'
import './WellSpringTitle.scss'

interface WellspringsIP {
    title: string
}


export const WellSpringTitle: FC<WellspringsIP> = ({title}) => {
  return (
    <h2 className='wellspring-title'>{title}</h2>
  )
}

