import { Link } from "react-router-dom";
import "./RouteButtons.scss";
interface btnsRoutseIp {
  route: string;
  text: string;
}

export const RouteButtons = () => {
  const btnsRoute: btnsRoutseIp[] = [
    {
      route: "/wellspring",
      text: "Джерела",
    },
    {
      route: "/advice",
      text: "Поради",
    },
    {
      route: "/happenings",
      text: "Наслідки",
    },
  ];
  return (
    <div className="routes__button">
      {btnsRoute.map((elements) => (
        <Link to={elements.route} className="routes__button-link">
          <button>
            <p className="routes__button-text">{elements.text}</p>
          </button>
        </Link>
      ))}
    </div>
  );
};
