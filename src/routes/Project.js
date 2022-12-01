import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.png";
import img4 from "../3.png";
import img5 from "../6.png";

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
          img={img4}
          link={{
            live: "https://main-229x.vercel.app/ipage.html",
            source: "view-source:https://main-alpha-lyart.vercel.app/",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img5}
          link={{
            live: "https://main-229x.vercel.app/instarcart.html",
            source: "view-source:https://main-alpha-lyart.vercel.app/",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img3}
          link={{
            live: "https://main-229x.vercel.app/whatsapp.html",
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
    <div className="my-3">
      <img src={img} alt="img" height={300} className="wer" />
      <div className="mony d-flex justify-content-center">
        <button className="btn btn-outline-dark rounded-4 my-1 px-3" type="button">
          <a href={link.live}>Live Demo</a>
        </button>

        <button className="btn btn-outline-dark rounded-4 my-1 px-4" type="button">
          <a href={link.source}>Source code</a>
        </button>
      </div>
    </div>
  );
};
