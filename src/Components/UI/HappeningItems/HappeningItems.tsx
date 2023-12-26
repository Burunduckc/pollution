import React from "react";
import { happeningsData } from "../../../data/happenings";
import { Link } from "react-router-dom";
import "./HappeningItems.scss";
export const HappeningItems = () => {
  return (
    <div className="happening-list">
      {happeningsData.map((element) => (
        <div className="happening-list__item">
          <div className="happening-list__blockimg">
            <img src={element.source} alt="" />
          </div>
          <div style={{margin: '0 auto'}}>
          <Link to={element.route} className="happening-list-url">
            <button>{element.title} </button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
