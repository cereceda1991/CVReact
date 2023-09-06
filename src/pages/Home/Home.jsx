import BodyCV from "../../components/BodyCV/BodyCV";
import HeaderCv from "../../components/HeaderCv/HeaderCv";
import dataCv from "../../data/dataEn.json";
import "./Home.css";

const Home = () => {
  return (
    <div className="container_home" id="certificate">
      <HeaderCv data={dataCv} />
      <BodyCV data={dataCv} />
    </div>
  );
};

export default Home;
