import { FC } from 'react'
import { organisationIP } from '../../../../data/companies'
import './WellSpringList.scss'

interface wellspringListIP {
    data: organisationIP[]
}

export const WellSpringList: FC<wellspringListIP> = ({data}) => {
  return (
    <ul className='wellspring-list'>    
        {data.map((element) => <li className='wellspring-list__item'><a href={element.link} className='wellspring-list__item-link'>{element.nameOfOrganistaon}</a> -- {element.text}</li>)}
    </ul>
  )
}
