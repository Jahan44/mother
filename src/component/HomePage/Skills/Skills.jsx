import React from "react";
import "./Skill.css";
import node from "./image/node.png";
import html from "./image/Html.png";
import css from "./image/css.png";
import javascript from "./image/javascript.png";
import reactImg from "./image/react.png";

const Skills = () => {
  return (
    <div>
      <h1 className=" mt-4 text-center text-primary"> My Skills </h1>
      <div className="skill-title-body">
        <span className="skill-title">What I Now</span>
      </div>

      <div className="row p-4 mt-5">
        <div className="col-lg-3 mb-4">
          <div className="skill-img-body">
            <img src={reactImg} alt="react" className=" img-fluid" />
            <h4 className=" text-center mt-4">70% React </h4>
          </div>
        </div>
        <div className="col-lg-3 mb-4 ">
          <div className="skill-img-body">
            <img src={javascript} alt="javascript" className=" img-fluid" />
            <h4 className=" text-center mt-4">80% Javascript </h4>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="skill-img-body">
            <img src={css} alt="css" className=" img-fluid" />
            <h4 className=" text-center mt-4">85% CSS </h4>
          </div>
        </div>
        <div className="col-lg-3 mb-4 ">
          <div className="skill-img-body">
            <img src={html} alt="html" className=" img-fluid" />
            <h4 className=" text-center mt-4">90% HTML </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
