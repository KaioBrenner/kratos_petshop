import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import ClientData from "../pages/ClientData";
import ClientList from "../pages/ClientList";
import ClientSignUp from "../pages/ClientSignUp";
import ProductList from "../pages/ProductList";
import SalesHistory from "../pages/SalesHistory";
import Services from "../pages/Services";

import { PrivateRoute } from "./PrivateRoute";

export function Routes() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dados-cliente"
        element={
          <PrivateRoute>
            <ClientData />
          </PrivateRoute>
        }
      />
      <Route path="/lista-clientes" element={<ClientList />} />
    </Routes>
  </BrowserRouter>;
}
