import { FC } from 'react'
import './HappeningImages.scss'

interface HappeningImagesIP {
    images: string[]
}

export const HappeningImages: FC<HappeningImagesIP> = ({images}) => {
  return (
    <div className='happening__wrap-imagespollution'>
        {images.map((url, index) => <img src={url} alt={`photo ${index}`}/>)}
    </div>
  )
}
