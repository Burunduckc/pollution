import { FC } from "react";

interface pollutionIP {
  pollutionArray: string[];
}

export const HappeningListPollution: FC<pollutionIP> = ({ pollutionArray }) => {
  return (
    <>
      <p className="happening-info-textlist">Види забруднень:</p>
      <ul>
        {pollutionArray.map((element) => (
          <li className="happening-info-list__pollution">{element}</li>
        ))}
      </ul>
    </>
  );
};
