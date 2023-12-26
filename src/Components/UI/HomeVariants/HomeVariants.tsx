import { FC } from "react"
import { variantsComponent } from "../../../data/variants"

interface variantsIP {
  variantsData: variantsComponent[]
}

export const HomeVariants: FC<variantsIP> = ({variantsData}) => {
  return (
    <div className='home-variant'>
      {variantsData.map((elements) => <div className="home-variant__item">
          <div className="home-variant__blockoftext">
            <p className="home-variant-main">{elements.main}</p>
            <p className="home-variant-sub">
              {elements.sub}
            </p>
          </div>
          <div>
            <img 
            src={elements.source} 
            alt={elements.alt} 
            className="home-variant-icon" />
          </div>
        </div>)}
    </div>
  )
}
