"use client";
import { useState } from "react";
import Drawer from "react-modern-drawer";
interface RegisterProps {
  isAuthenticated: boolean;
}
const Register: React.FC<RegisterProps> = (props) => {
  const { isAuthenticated } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      {!isAuthenticated && (
        <li>
          <a href="" className="signup-bttn" onClick={clickHandler}>
            Sign up
          </a>
        </li>
      )}
      <Drawer
        open={isOpen}
        onClose={clickHandler}
        direction="right"
        className="register-page-wrap active"
        size={400}
        enableOverlay={false}
      >
        <div className="register-form">
          <div className="form-header">
            <h5>Register</h5>
            <a href="" onClick={clickHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
                  fill="#050400"
                />
              </svg>
            </a>
          </div>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="Enter Your Phone Number" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </Drawer>
      {/* <!-- register modal end --> */}
    </>
  );
};

export default Register;
