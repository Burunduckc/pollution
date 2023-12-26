import { morePropistions } from "../../../data/propositionRender";

export const HomeProposition = () => {
  return (
    <div className="home-propositions">
      <p className="home-propositions-title">
        Саме тому, ця веб сторінка існує задля поліпшеня ситуації, щодо
        навколошнього забруднення
      </p>
      <div className="home-propositions-wrapper">
        {morePropistions.map((element) => (
        <div className="home-propositions-card">
            <img
              src={element.source}
              alt={element.alt}
              className={element.nameOfClass}
            />
            <p className="home-propositions-card-text">
              {element.text}
            </p>
          </div>
          ))}
      </div>
    </div>
  );
};
