import { HomeProposition } from "../../Components/UI/HomeProposition/HomeProposition";
import { HomeVariants } from "../../Components/UI/HomeVariants/HomeVariants";
import { variantsArray } from "../../data/variants";
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
      <HomeVariants variantsData={variantsArray}/>
      <HomeProposition />
    </div>
  );
};
