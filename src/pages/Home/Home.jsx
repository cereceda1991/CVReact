import React from "react";
import dataCv from "../../data/dataCv.json";
import HeaderCv from "../../components/HeaderCv/HeaderCv";
import BodyCV from "../../components/BodyCV/BodyCV";
import "./Home.css";


const Home = () => {


  return (
    <div className="container_home" id="certificate">
      <HeaderCv info={dataCv.headerData} />
      <BodyCV info={dataCv} />
    </div>
  );
};

export default Home;
