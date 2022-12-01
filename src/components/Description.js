import React from "react";
import img1 from "../images/6.jpg";
import img2 from "../images/7.jpg";
import img3 from "../images/8.jpg";
import img4 from "../images/9.jpg";

const Description = () => {
  return (
    <article className="c">
      <h1 className="a">
        Hi, I am <span className="b">Josh_Kean</span>👌
      </h1>
      <h2 className="a">I'm a Full Stack Developer</h2>
      <div>
        <Property img={img4} text="Fueled by coffee" />
        <Property img={img3} text="Based in Nigeria" />
        <Property img={img2} text="Student at ValuemaxCodersHub" />
        <Property img={img1} text="joshua9@gmail.com" />
      </div>
    </article>
  );
};

export default Description;

const Property = ({ img, text }) => {
  return (
    <div>
      <img src={img} alt="" className="my-1 rounded-5" height={40} width={40} />
      <span className="px-2">{text}</span>
    </div>
  );
};
