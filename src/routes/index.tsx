import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "../components/layouts/Container";
import Loading from "../components/Loading";
import SecretRoute from "./components/SecretRoute";

const Shop = React.lazy(() => import("../pages/Shop"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Login = React.lazy(() => import("../pages/Login"));

export function AppRoutes({ before, after }: any) {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        {before}
        <Container>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<SecretRoute />}>
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Container>
        {after}
      </React.Suspense>
    </BrowserRouter>
  );
}
