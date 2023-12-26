/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams } from "react-router-dom";
import { happeningsData } from "../../data/happenings";
import { HappeningImages } from "../../Components/UI/HappeningImages/HappeningImages";
import './HappeningFirst.scss'

export const HappeningsFirst = () => {
  type idParam = {
    id: string
  }

  const { id } = useParams<idParam>();
  return (
    <div className="happening-info">
      <Link to={"/happenings"}>Повернутись назад</Link>
      {+id >= happeningsData.length && id !== undefined ? (
        <p style={{ textAlign: "center", fontSize: "64px", marginTop: "20px" }}>
          Вибачте, такого наслідка немає
        </p>
      ) : (
        <div>
                {/*@ts-expect-error*/}
                <p className="happening-info-text">{happeningsData[+id].title}</p>
                <HappeningImages images={happeningsData[+id].images}/>
        </div>
      )}
    </div>
  );
};
