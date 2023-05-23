import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ClientData from "./pages/ClientData";
import ClientList from "./pages/ClientList";
import ClientSignUp from "./pages/ClientSignUp";
import ProductList from "./pages/ProductList";
import SalesHistory from "./pages/SalesHistory";

const App = () => {
  return (
    // Rotas

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dados-cliente" element={<ClientData />} />
        <Route path="/lista-clientes" element={<ClientList />} />
        <Route path="/cadastro-cliente" element={<ClientSignUp />} />
        <Route path="/lista-produtos" element={<ProductList />} />
        <Route path="/historico-vendas" element={<SalesHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
