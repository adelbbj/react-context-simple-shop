import React, { useState } from "react";
import useLocalStorage from "../utils/hooks/useLocalStorage";

export const AuthContext = React.createContext({
  isAuth: false,
  login: (value: string | void) => value,
  logout: () => {},
});

const AuthContextProvider = (props: any) => {
  const [, setToken] = useLocalStorage<string | null>("token", null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (value: any) => {
    if (value) {
      setIsLoggedIn(true);
      setToken(value);
    }
  };
  const logoutHandler = () => {
    setToken(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
