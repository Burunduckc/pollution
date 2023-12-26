import { FC } from "react";
import { adviceIP } from "../../../data/advices";
import './AdviceList.scss'

interface adviceListIp {
  adviceArray: adviceIP[];
}

export const AdviceList: FC<adviceListIp> = ({ adviceArray }) => {
  return (
    <>
      {adviceArray.map((element) => (
        <div className="advice-list">
          <div className="advice-list-text__block">
            <h2>{element.title}</h2>
            <p>{element.subtitle}</p>
          </div>
          <div className="advice-list_grid"> 
            {element.urlToImg.map((element) => <img src={element.url} alt={element.alt}/>)}
          </div>
        </div>
      ))}
    </>
  );
};
