import Link from "next/link";

const FooterBottom = () => {
  return (
    <>
      <div className="ftr-copy">
        <p>Copyright &copy; 2023 giopio.com All rights reserved.</p>
        <ul>
          <li>
            <Link href="/">Terms Of Use</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterBottom;
