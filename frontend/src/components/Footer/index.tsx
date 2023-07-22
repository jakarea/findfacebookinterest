import Link from "next/link";
import FooterBottom from "./Bottom";
import FooterMenu from "./Menu";
import SocialIcons from "./SocialIcons";

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div>
      {/* <!-- footer section start --> */}
      <footer className="footer-section">
        <div className="container">
          <div className="d-grid">
            {/* <!-- footer logo part --> */}
            <div className="footer-logo-part">
              <div className="ftr-logo">
                <Link href="/">
                  <img
                    src="./assets/images/ftr-logo.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <h6>Follow us</h6>
              <SocialIcons />
            </div>
            {/* <!-- footer logo part --> */}

            <FooterMenu />
          </div>
          <FooterBottom />
        </div>
      </footer>
      {/* <!-- footer section end --> */}
    </div>
  );
};

export default Footer;
