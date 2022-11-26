import { bookIcon } from "../assets";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#home" class="logo-box">
          <img src={bookIcon} alt="Icon" />
          <span>BlogBooks</span>
        </a>

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
  );
};

export default Navigation;
