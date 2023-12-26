/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams } from 'react-router-dom'
import { happeningsData } from '../../data/happenings'

export const HappeningsFirst = () => {
  const { id } = useParams()
  return (
    <div>
      <Link to={'/happenings'}>Повернутись назад</Link>
      {/*@ts-expect-error*/}
      {+id >= happeningsData.length ? <p style={{textAlign: 'center', fontSize: '64px', marginTop: '20px'}}>Вибачте, такого наслідка немає</p> :  <p>{happeningsData[+id].title}</p>}
    </div>
  )
}
