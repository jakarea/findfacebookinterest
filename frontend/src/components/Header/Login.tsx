"use client";
import { baseUrl } from "@/utils";
import { storeToken } from "@/utils/token";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Drawer from "react-modern-drawer";

interface InitialFormState {
  email: string;
  password: string;
}

interface LoginProps {
  saveUserToState: (user: any) => void;
  isAuthenticated: boolean;
}

const Login: React.FC<LoginProps> = (props) => {
  const { saveUserToState, isAuthenticated } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const responseMessage = (response: TokenResponse) => {
    const accessToken = response.access_token;
    const data = {
      access_token: accessToken,
      isOAuth: true,
      OAuthType: "google",
    };

    login(data);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseMessage,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<InitialFormState>({
    values: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (values: InitialFormState) => {
    login(values);
  };

  const login = async (data: any) => {
    try {
      const res = await axios.post(`${baseUrl}/login`, data);
      const token = res.data.token;
      storeToken(token);
      saveUserToState(token);
      reset();
      setIsOpen(false);
      setIsLoading(false);
    } catch (error: any) {
      setError("email", { message: error?.response?.data?.message || "" });
      setError("password", { message: error?.response?.data?.message || "" });
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isAuthenticated && (
        <li>
          <a href="/" onClick={clickHandler}>
            Log in
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
            <h5>Login</h5>
            <a href="#" onClick={clickHandler}>
              <CloseIcon />
            </a>
          </div>

          <form className="mt-5" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter Your Email"
              />
              {errors?.email && (
                <small className="" style={{ color: "red" }}>
                  {errors?.email?.message}
                </small>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required!",
                })}
                placeholder="********"
              />
              {errors?.password && (
                <small className="" style={{ color: "red" }}>
                  {errors?.password?.message}
                </small>
              )}
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-submit">
                Login
              </button>
            </div>
            <div className="form-submit" style={{ marginTop: 20 }}>
              <button
                type="button"
                className="btn btn-submit"
                onClick={() => googleLogin()}
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

const CloseIcon = () => {
  return (
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
  );
};

export default Login;

interface TokenResponse {
  access_token: string;
}
