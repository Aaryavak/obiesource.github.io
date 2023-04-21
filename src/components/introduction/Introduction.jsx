import React from "react";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="obs__introduction">
      <div className="obs__introduction-heading animate fade">
        <h1>Where developers build together</h1>
      </div>
      <div className="obs__introduction-description__container">
        <div className="obs__introduction-description-buls">
          <div className="obs__introduction-description description_first-bul animate slide-up delay-1">
            <h3>Find your people</h3>
            <p>
              Members can present about their projects and find their teammates.
            </p>
          </div>
          <div className="obs__introduction-description description_third-bul animate slide-up delay-2">
            <h3>Develop your skills</h3>
            <p>
              Hone your collaboration skills, as well as learn new technologies.
            </p>
          </div>
          <div className="obs__introduction-description description_second-bul animate slide-up delay-3">
            <h3>Contribute to projects</h3>
            <p>Hop in the development of an in-progress project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
