import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <>
      <div className="about">About {props.data.length} Results</div>
    </>
  );
};

export default About;
