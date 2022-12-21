import React from "react";

const About = () => {
  return (
    <div className="my-3">
      <ShortNote />
      <Skills />
      <Hobbies />
    </div>
  );
};

export default About;

const ShortNote = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <article className="bg-dark w-75 rounded-3">
        <div className="as rounded-top p-1">
          <span className="dot"></span>
          <span className="dot1"></span>
          <span className="dot2"></span>
        </div>
        <div className="pue p-lg-5 p-3">
          <h1 className="p-2">About Josh_Kean</h1>
          <p>
            I am outgoing, dedicated, and open-minded. I get across to people
            and adjust to changes with ease.
            <br />I believe that a person should work on developing their
            professional skills and learning new things all the time.
          </p>
        </div>
      </article>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <article className="bg-dark w-75 rounded-3">
        <div className="as rounded-top p-1">
          <span className="dot"></span>
          <span className="dot1"></span>
          <span className="dot2"></span>
        </div>
        <div className="pue p-5">
          <h1 className="p-2">Skills</h1>
          <SkillList
            title="Proficient With"
            list={[
              "Html5",
              "Css3",
              "Bootstrap",
              "JavaScript",
              "React",
              "Github",
            ]}
          />
          <SkillList
            title="Exposed To"
            list={["Microsoft Office", "3D Animation"]}
          />
        </div>
      </article>
    </div>
  );
};

const SkillList = ({ title, list }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((eachList, index) => (
          <li key={index}>{eachList}</li>
        ))}
      </ul>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <article className="bg-dark w-75 rounded-3">
        <div className="as rounded-top p-1">
          <span className="dot"></span>
          <span className="dot1"></span>
          <span className="dot2"></span>
        </div>
        <div className="pue p-5">
          <h1>Hobbies</h1>
          <div>
            <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📖&nbsp;&nbsp;&nbsp;Reading" />
            <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎦&nbsp;&nbsp;&nbsp;Theatre" />
            <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📱&nbsp;&nbsp;&nbsp;Movies" />
            <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👩‍💻&nbsp;&nbsp;&nbsp;Coding" />
          </div>
        </div>
      </article>
    </div>
  );
};

const HobbyList = ({ img, text }) => {
  return (
    <div>
      <img src={img} alt="" />
      <span>{text}</span>
    </div>
  );
};
