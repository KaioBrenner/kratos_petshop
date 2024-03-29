import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const MyComponent = () => {
//   const contextValue = useContext(MyContext);

//   return <p>Valor do contexto: {contextValue}</p>;
// };

import Login from "./pages/Login";
import ClientData from "./pages/ClientData";
import ClientList from "./pages/ClientList";
import ClientSignUp from "./pages/ClientSignUp";
import ProductList from "./pages/ProductList";
import SalesHistory from "./pages/SalesHistory";
import Services from "./pages/Services";
import Home from "./pages/Home";

// import { PrivateRoute } from "./routes/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />}/>
      <Route path="/clientes" element={<ClientList />} />
      <Route path="/dados-cliente" element={<ClientData />} />
      <Route path="/atendimentos" element={<Services />} />
      <Route path="/cadastro-cliente" element={<ClientSignUp />} />
      <Route path="/produtos" element={<ProductList />} />
      <Route path="/vendas" element={<SalesHistory />} />
    </Routes>
  );
};

export default App;

// <Router>
//   <Routes>
//     <Route path="/" element={<Login />} />
//     <Route path="/dados-cliente" element={<ClientData />} />
//     <Route path="/lista-clientes" element={<ClientList />} />
//     <Route path="/cadastro-cliente" element={<ClientSignUp />} />
//     <Route path="/lista-produtos" element={<ProductList />} />
//     <Route path="/historico-vendas" element={<SalesHistory />} />
//     <Route path="/servicos" element={<Services />} />
//   </Routes>
// </Router>
