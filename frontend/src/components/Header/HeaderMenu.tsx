import { useAuthContext } from "@/context/authContext";
import { baseUrl } from "@/utils";
import { getToken, removeToken } from "@/utils/token";
import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
const HeaderMenu = () => {
  const { state, setState } = useAuthContext();

  const saveUserToState = useCallback(
    async (token: string) => {
      const { data: user } = await axios.get(`${baseUrl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setState({
        isAuthenticated: user && Object.keys(user).length > 0,
        user,
      });
    },
    [setState]
  );
  const Logout = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setState({
      isAuthenticated: false,
      user: null,
    });
    removeToken();
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      saveUserToState(token);
    }
  }, [saveUserToState]);
  return (
    <>
      <div className="header-menu">
        <ul>
          {state.isAuthenticated && (
            <>
              <li>
                <Link href="/project">My Project</Link>
              </li>
              <li>
                <a href="#" onClick={Logout}>
                  Logout
                </a>
              </li>
            </>
          )}
          <Login
            isAuthenticated={state.isAuthenticated}
            saveUserToState={saveUserToState}
          />
          <Register isAuthenticated={state.isAuthenticated} />
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;
