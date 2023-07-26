import Link from "next/link";

const FooterMenu = () => {
  return (
    <div>
      {" "}
      {/* <!-- footer menu part --> */}
      <div className="footer-menu-part">
        {/* <!-- links --> */}
        <div className="ftr-menu-links">
          <h6>Company</h6>
          <ul>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Team</Link>
            </li>
            <li>
              <Link href="/">F.A.Q</Link>
            </li>
          </ul>
        </div>
        {/* <!-- links --> */}
        {/* <!-- links --> */}
        <div className="ftr-menu-links">
          <h6>Product</h6>
          <ul>
            <li>
              <Link href="/">Contact us</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
          </ul>
        </div>
        {/* <!-- links --> */}
        {/* <!-- links --> */}
        <div className="ftr-menu-links">
          <h6>Product</h6>
          <ul>
            <li>
              <Link href="/">Contact us</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
          </ul>
        </div>
        {/* <!-- links --> */}
      </div>
      {/* <!-- footer menu part --> */}
    </div>
  );
};

export default FooterMenu;
