import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Wellsprings } from "../../pages/Wellsprings/Wellsprings";
import { Advice } from "../../pages/Advices/Advice";
import { Happening } from "../../pages/Happenings/Happening";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./App.css";
import { HappeningsFirst } from "../../pages/Happenings/HappeningsFirst";


const App = () => {
  const routesData = [
    {
      link: "/",
      path: <Home />,
    },
    {
      link: "/wellspring",
      path: <Wellsprings />,
    },
    {
      link: "/advice",
      path: <Advice />,
    },
    {
      link: "/happenings",
      path: <Happening />,
    },
    {
      link: '/happenings/:id',
      path: <HappeningsFirst/>
    }
  ];
  return (
    <>
      <Header />
      <Routes>
        {routesData.map((element) => (
          <Route
            path={element.link}
            element={element.path}
            key={Math.random()}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
