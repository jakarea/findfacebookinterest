import Login from "./Login";
import Register from "./Register";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <div>
      <nav className="navbar-section">
        <div className="header-container">
          <div className="d-flex">
            {/* <!-- header logo --> */}
            <div className="header-brand">
              <a href="index.html">
                <img
                  src="./assets/images/logo.svg"
                  alt="Logo"
                  className="img-fluid"
                />
              </a>
            </div>
            {/* <!-- header logo --> */}
            {/* <!-- header menu  --> */}
            <div className="header-menu">
              <ul>
                <li>
                  <a href="project.html">My Project</a>
                </li>
                <Login />
                <Register />
              </ul>
            </div>
            {/* <!-- header menu  --> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
