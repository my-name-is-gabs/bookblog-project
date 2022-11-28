import { useState, useEffect } from "preact/hooks";
import { bookIcon } from "../assets";

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
          <a href="#home" class="logo-box">
            <img src={bookIcon} alt="Icon" />
            <span>BlogBooks</span>
          </a>

          <i
            class={`bx ${toggleNav ? "bx-x" : "bx-menu"} open-sidenav`}
            onClick={onClick}
          ></i>

          <ul className="nav">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <div className="dropdown">
                <div className="drop-hover">
                  Categories <i class="bx bxs-chevron-down"></i>
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
              <a href="#login" className="nav-link">
                <i class="bx bx-log-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`side-nav ${toggleNav ? "" : "close"}`}>
        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <button className="login-btn">Log In</button>
      </div>
    </>
  );
};

export default Navigation;
