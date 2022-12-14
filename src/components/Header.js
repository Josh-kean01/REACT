import React from "react";
import logo from "../5.jpg";

const Header = ({ setCurrentPage, isDarkMode, setIsDarkMode }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid">
          <span className="navbar-brand px-lg-5 aoa" href="#" role="button">
            <img src={logo} width="48" alt="" className="rounded" />
            &nbsp; 𝕵𝖔𝖘𝖍_𝕶𝖊𝖆𝖓 ➭
          </span>
          <span
            className="navbar-toggler border-0 jiu aoa"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark"></span>
            <i class="bi bi-list navbar-toggler-icon"></i>
          </span>
          <div
            className="collapse navbar-collapse mx-lg-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav mx-lg-5">
              <span
                className="nav-link active mx-lg-5 aoa"
                aria-current="page"
                role="button"
                onClick={() => setCurrentPage("home")}
              >
                Home
              </span>
              <span
                className="nav-link mx-lg-5 aoa"
                role="button"
                onClick={() => setCurrentPage("about")}
              >
                About Me
              </span>
              <span
                className="nav-link mx-lg-5 aoa"
                role="button"
                onClick={() => setCurrentPage("project")}
              >
                Project
              </span>
              {/* <span
                className="nav-link mx-lg-5"
                role="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <iconify-icon
                  inline
                  icon="line-md:switch-off-to-switch-transition"
                ></iconify-icon>
              </span> */}
            </div>
          </div>
          <span
            className="nav-link mx-lg-5 zuu aoa"
            role="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <iconify-icon
              inline
              icon="line-md:switch-off-to-switch-transition"
            ></iconify-icon>
          </span>
        </div>
      </nav>

      {/* <nav>
        <ul>
          <li>
            <button onClick={() => setCurrentPage("home")}>home</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage("about")}>about me</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage("project")}>project</button>
          </li>
          <li>
            <button onClick={() => setIsDarkMode("isDarkmode")}>+</button>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
