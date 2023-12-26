import { HomeProposition } from "../../Components/UI/HomeProposition/HomeProposition";
import iconsWarmingPopullation from "../../assets/1651010058_1-vsegda-pomnim-com-p-teplovoe-zagryaznenie-okeana-foto-1.jpg";
import pol from "../../assets/pollution.svg";
import plasticPollution from "../../assets/shutterstock426187984-resized.png";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-start">
        <h1 className="home-title">
          Забруднення навколишнього середовища та важливість його охорони
        </h1>
        <p className="home-subtitle">
          Забруднення навколишнього середовища – серйозна проблема, яка
          негативно впливає на наш світ. Людство повинно усвідомити, наскільки
          важливо бережно ставитися до природи, щоб зберегти її красу та
          біорізноманіття.
        </p>
      </div>
      <p style={{ textAlign: "center", fontSize: "32px", marginTop: "40px" }}>
        Є дуже багато видів забруднень, які перелічені нижче:
      </p>
      <div className="home-variant">
        <div className="home-variant__item">
          <div className="home-variant__blockoftext">
            <p className="home-variant-main">Забруднення води:</p>
            <p className="home-variant-sub">
              Одним з основних аспектів забруднення навколишнього середовища є
              викид сміття у водні джерела. Ця дія завдає невідновного шкоди
              екосистемам та водним ресурсам. Сміття, викинуте у воду,
              розкладається повільно, забруднюючи воду та загрожуючи життю
              багатьох видів риб та інших морських організмів.
            </p>
          </div>
          <div>
            <img 
            src={pol} 
            alt="" 
            className="home-variant-icon" />
          </div>
        </div>
        <div className="home-variant__item">
          <div className="home-variant__blockoftext">
            <p className="home-variant-main">Пластикове забруднення:</p>
            <p className="home-variant-sub">
              У довкілля потрапляє величезна кількість пластикових відходів;
              Так, дослідження припускають, що тіла 90% морських птахів містять
              у собі пластик. Існує дуже багато видів та форм пластикового
              забруднення. Пластикове забруднення негативно впливає на земну
              поверхню, водні шляхи та океани.
            </p>
          </div>
          <div>
            <img src={plasticPollution} alt="" className="home-variant-icon" />
          </div>
        </div>
        <div className="home-variant__item">
          <div className="home-variant__blockoftext">
            <p className="home-variant-main">Забруднення води:</p>
            <p className="home-variant-sub">
              Одним з основних аспектів забруднення навколишнього середовища є
              викид сміття у водні джерела. Ця дія завдає невідновного шкоди
              екосистемам та водним ресурсам. Сміття, викинуте у воду,
              розкладається повільно, забруднюючи воду та загрожуючи життю
              багатьох видів риб та інших морських організмів.
            </p>
          </div>
          <div>
            <img src={pol} alt="" className="home-variant-icon" />
          </div>
        </div>
        <div className="home-variant__item">
          <div className="home-variant__blockoftext">
            <p className="home-variant-main">Теплове забруднення:</p>
            <p className="home-variant-sub">
              Наслідки Теплове забруднення є причиною створення теплових
              островів, місцевої (штучної) інверсії температур над джерелом, що
              призводить до розвитку мікроциркуляцій атмосфери, зміни
              мікроклімату та ускладнення механізму перенесення забруднень.
              Виникають проблеми у річках та прибережних океанічних водах.
            </p>
          </div>
          <div>
            <img
              src={iconsWarmingPopullation}
              alt=""
              className="home-variant-icon"
            />
          </div>
        </div>
      </div>
      <HomeProposition />
    </div>
  );
};
