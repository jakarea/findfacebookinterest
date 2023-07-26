"use client";
import { AuthContextProvider } from "@/context/AuthContextProivder";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
    >
      <AuthContextProvider>
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
                <HeaderMenu />
                {/* <!-- header menu  --> */}
              </div>
            </div>
          </nav>
        </div>
      </AuthContextProvider>
    </GoogleOAuthProvider>
  );
};

export default Header;
