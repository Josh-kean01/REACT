import React from "react";
import img from "./logo512.png";
import img1 from "../images/11.png";
import img2 from "../images/12.png";
import img3 from "../images/13.png";

const Project = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row row-cols-lg-2 d-flex justify-content-center">
        <ProjectCard
          img={img1}
          link={{
            live: "https://main-alpha-lyart.vercel.app",
            source: "view-source:https://main-alpha-lyart.vercel.app/",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img2}
          link={{
            live: "https://main-alpha-lyart.vercel.app",
            source: "view-source:https://main-alpha-lyart.vercel.app/",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img}
          link={{
            live: "https://main-alpha-lyart.vercel.app",
            source: "view-source:https://main-alpha-lyart.vercel.app/",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img}
          link={{
            live: "https://main-alpha-lyart.vercel.app",
            source: "view-source:https://main-alpha-lyart.vercel.app/",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img3}
          link={{
            live: "https://main-alpha-lyart.vercel.app",
            source: "view-source:https://main-alpha-lyart.vercel.app/",
          }}
        ></ProjectCard>
      </div>
    </div>
  );
};

export default Project;

const ProjectCard = ({ img, link }) => {
  return (
    <div>
      <img src={img} alt="img" height={300} />
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-dark rounded-4 my-1">
          <a href={link.live}>Live Demo</a>
        </button>
        <br />
        <button className="btn btn-outline-dark rounded-4 my-1">
          <a href={link.source}>Source code</a>
        </button>
      </div>
    </div>
  );
};
