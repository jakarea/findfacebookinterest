"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Link from "next/link";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
    >
      <div>
        <nav className="navbar-section">
          <div className="header-container">
            <div className="d-flex">
              {/* <!-- header logo --> */}
              <div className="header-brand">
                <Link href="/">
                  <img
                    src="./assets/images/logo.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
              {/* <!-- header logo --> */}
              {/* <!-- header menu  --> */}
              <div className="header-menu">
                <ul>
                  <li>
                    <Link href="/project">My Project</Link>
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
    </GoogleOAuthProvider>
  );
};

export default Header;
