import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { createContext, useContext } from "react";

import { MyContextProvider } from "./MyContext";

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

import { PrivateRoute } from "./routes/PrivateRoute";

const App = () => {
  // Rotas

  return (
    <MyContextProvider value={false}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/lista-clientes"
            element={
              <PrivateRoute>
                <ClientList />
              </PrivateRoute>
            }
          />
          <Route
            path="/dados-cliente"
            element={
              <PrivateRoute>
                <ClientData />
              </PrivateRoute>
            }
          />
          <Route
            path="/servicos"
            element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            }
          />
          <Route
            path="/cadastro-cliente"
            element={
              <PrivateRoute>
                <ClientSignUp />
              </PrivateRoute>
            }
          />
          <Route
            path="/lista-produtos"
            element={
              <PrivateRoute>
                <ProductList />
              </PrivateRoute>
            }
          />
          <Route
            path="/historico-vendas"
            element={
              <PrivateRoute>
                <SalesHistory />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
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