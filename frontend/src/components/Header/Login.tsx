"use client";
import { baseUrl } from "@/utils";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import Drawer from "react-modern-drawer";

const Login = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const responseMessage = (response: TokenResponse) => {
    const accessToken = response.access_token;
    const data = {
      access_token: accessToken,
      isOAuth: true,
      OAuthType: "google",
    };

    axios
      .post(`${baseUrl}/login`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const login = useGoogleLogin({
    onSuccess: responseMessage,
  });

  return (
    <>
      <li>
        <a href="/" onClick={clickHandler}>
          Log in
        </a>
      </li>

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
            <h5>Login</h5>
            <a href="#" onClick={clickHandler}>
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
          <form className="mt-5" onSubmit={submitHandler}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-submit">
                Login
              </button>
            </div>
            <div className="form-submit" style={{ marginTop: 20 }}>
              <button
                type="submit"
                className="btn btn-submit"
                onClick={() => login()}
              >
                Login with Google
              </button>
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
      </Drawer>
    </>
  );
};

export default Login;

interface TokenResponse {
  access_token: string;
}
