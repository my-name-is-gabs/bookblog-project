import { useState } from "preact/hooks";
import { bookIcon } from "../assets";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [toggleNav, setToggle] = useState(false);

  if (toggleNav) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "unset";
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      setToggle((value) => (value = false));
    }
  });

  const onClick = function () {
    setToggle((value) => !value);
  };

  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <Link to="/" className="logo-box">
            <img src={bookIcon} alt="Icon" />
            <span>BlogBooks</span>
          </Link>

          <i
            className={`bx ${toggleNav ? "bx-x" : "bx-menu"} open-sidenav`}
            onClick={onClick}
          ></i>

          <ul className="nav">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <div className="drop-hover">
                  Categories <i className="bx bxs-chevron-down"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <a href="#sub-link">Fiction</a>
                  </li>
                  <li>
                    <a href="#sub-link">Non-Fiction</a>
                  </li>
                  <li>
                    <a href="#sub-link">Self-help</a>
                  </li>
                  <li>
                    <a href="#sub-link">Business</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <Link to="/login" className="nav-link">
                <i className="bx bx-log-in"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`side-nav ${toggleNav ? "" : "close"}`}>
        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <Link to="/login" className="login-btn">
          Log In
        </Link>
      </div>
    </>
  );
};

export default Navigation;
