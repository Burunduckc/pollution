import { WellSpringTitle } from './WellSpringTitle/WellSpringTitle'
import { WellSpringList } from './WellSpringList/WellSpringList'
import { companiesData } from '../../../data/companies'
import { pollutionsMaps } from '../../../data/mapsOfPollution'
import { activists } from '../../../data/listOfActivist'
import './WellSpringCreator.scss'

export const WellSrpingsCreator = () => {
  return (
    <div className='wellspring'>
        <h2 className='wellspring__main'>Корисні джерела, які можуть допомогти збільшити розуміння про навколошне забруднення</h2>
        <div className='wellspring-companies'>
            <WellSpringTitle title='Міжнародні організації'/>
            <WellSpringList data={companiesData}/>
            <WellSpringTitle title='Онлайн мапи забруднення'/>
            <WellSpringList data={pollutionsMaps}/>
            <WellSpringTitle title='Відомі активісти'/>
            <WellSpringList data={activists}/>
        </div>
    </div>
  )
}
