import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import CartContextProvider from "./context/CartContext";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./context/AuthContext";
import App from "./App";

import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AuthContextProvider>
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </CartContextProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
