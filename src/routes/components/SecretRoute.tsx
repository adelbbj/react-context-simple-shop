import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SecretRoute = () => {
  const { isAuth } = React.useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default SecretRoute;
