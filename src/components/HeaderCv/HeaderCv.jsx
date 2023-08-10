import React, { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";
import "./HeaderCv.css";

const HeaderCv = ({ info }) => {
  const headerData = info[0];
  const { selectedColor } = useContext(ColorContext);

  return (
    <section className="container_header">
      <div
        className="decoration_left"
        style={{ backgroundColor: selectedColor }}
      >
        <span></span>
      </div>
      <div className="info_container">
        <p className="info_name" >
          {headerData.name}
        </p>
        <h1 className="info_lastName" >
          {headerData.lastName}
        </h1>
        <p className="job_title">
          {headerData.jobTitle}
        </p>
      </div>
      <div className="contact_info" style={{ backgroundColor: selectedColor }}>
        <div>
          <i className="bx bxs-envelope"></i>
          <span>{headerData.email}</span>
        </div>
        <div>
          <i className="bx bxs-phone"></i>
          <span>{headerData.phone}</span>
        </div>
        <div>
          <i className="bx bxs-map"></i>
          <span>{headerData.address}</span>
        </div>
        <div>
          <i className="bx bx-world"></i>
          <span>
            <a
              href={headerData.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {headerData.website}
            </a>
          </span>
        </div>
        <div>
          <i className="bx bxl-linkedin-square"></i>
          <span>
            <a
              href={headerData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {headerData.linkedin}
            </a>
          </span>
        </div>
        <div>
          <i className="bx bxl-github"></i>
          <span>
            <a
              href={headerData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {headerData.github}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeaderCv;
