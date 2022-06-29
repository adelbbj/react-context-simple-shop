import React from "react";

import { AuthContext } from "./context/AuthContext";
import { CartContext } from "./context/CartContext";
import Header from "./components/layouts/Header";
import useLocalStorage from "./utils/hooks/useLocalStorage";
import { AppRoutes } from "./routes";

function App() {
  const [token, setToken] = useLocalStorage<string | null>("token", null);

  const { logout, login, isAuth } = React.useContext(AuthContext);
  const cartContext = React.useContext(CartContext);

  const handleLogout = () => {
    logout();
  };

  React.useEffect(() => {
    if (token) {
      login(token);
    }
  }, []);

  const AppHeader = (
    <Header
      isLoggedIn={isAuth}
      onLogout={handleLogout}
      cartCount={cartContext.items.length}
    />
  );

  return <AppRoutes before={AppHeader} />;
}

export default App;
