import React from "react";
import Avatar from "../components/Avatar";
import Description from "../components/Description";

const Home = () => {
  return (
    <article className="mt-1">
      <div className="container pt-lg-5">
        <div className="row">
          <div className="col-lg my-1 pt-lg-2 d-flex justify-content-lg-end justify-content-center">
            <Avatar />
          </div>

          <div className="col-lg my-1 pt-lg-1 d-flex justify-content-lg-start justify-content-center">
            <Description />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
