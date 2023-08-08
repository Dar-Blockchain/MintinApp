import About from "./components/About";
import CoreTeam from "./components/CoreTeam";
import JoinMovement from "./components/JoinMovement";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Divider from "../../components/Divider/Divider";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Divider />
      <JoinMovement />
      <Divider />
      <RoadMap />
      <Divider />
      <CoreTeam />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
