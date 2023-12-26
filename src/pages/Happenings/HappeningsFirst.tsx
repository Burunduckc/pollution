/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams } from "react-router-dom";
import { happeningsData } from "../../data/happenings";
import { HappeningImages } from "../../Components/UI/HappeningImages/HappeningImages";
import "./HappeningFirst.scss";
import { HappeningListPollution } from "../../Components/UI/HappeningListPollutions/HappeningListPollution";
import { HappeningListOfSources } from "../../Components/UI/HappeningListOfSources/HappeningListOfSources";

export const HappeningsFirst = () => {
  const { id } = useParams() as {id: string};
  const happening = happeningsData[+id];
  return (
    <div className="happening-info">
      <Link to={"/happenings"} className="happening-info-link">Повернутись назад</Link>
      {+id >= happeningsData.length && id !== undefined ? (
        <p style={{ textAlign: "center", fontSize: "64px", marginTop: "20px" }}>
          Вибачте, такого наслідка немає
        </p>
      ) : (
        <div>
          <p className="happening-info-text">{happening.title}</p>
          <p>{happening.maininfo}</p>
          <HappeningImages images={happening.images} />
          <p>{happening.subinfo}</p>
          {happening.listOFPollutions && (
           <HappeningListPollution pollutionArray={happening.listOFPollutions}/>
          )}
          <HappeningListOfSources soruceArray={happening.dataFromSite}/>
        </div>
      )}
    </div>
  );
};
