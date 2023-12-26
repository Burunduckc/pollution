import React from 'react'
import { AdviceList } from '../../Components/UI/AdviceList/AdviceList'
import { advicesArray } from '../../data/advices'
import './Advice.scss'
export const Advice = () => {
  return (
    <div className='advice'>
      <h2 className='advice-title'>Поради</h2>
      <AdviceList adviceArray={advicesArray}/>
    </div>
  )
}
