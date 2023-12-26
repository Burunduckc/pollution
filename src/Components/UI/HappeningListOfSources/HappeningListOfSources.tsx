import React, { FC } from "react";

interface sorucesData {
    url: string,
    nameOfSite: string
}

interface happeningSourceIP {
    soruceArray: sorucesData[]
}

export const HappeningListOfSources: FC<happeningSourceIP> = ({soruceArray}) => {
  return (
    <div className="happening-info-source">
      <p>Джерела :</p>
      <ul className="happening-info-list">
        {soruceArray.map((data) => (
          <li>
            <a href={data.url} target="_blank">
              {data.nameOfSite}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
