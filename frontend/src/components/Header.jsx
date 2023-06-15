import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = ({ page }) => {

  const handleLogout = async (e) => {
    updateContextValue(false);
    localStorage.setItem("loggedIn", "false"); 
    navigate("/");
  };

  if (page === "login") {
    return (
      <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
        <div className="flex container justify-between items-center">
          <div className="logo">
            <Link to="/" className="flex justify-center items-center">
              <img src={logo} className="h-[80px]" />
            </Link>
          </div>

          <ul className="flex flex-row gap-5">
            <li className="font-bold text-lg">Login</li>
          </ul>
        </div>
      </header>
    );
  } else if (page !== "home"){
    return (
      <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
        <div className="flex container justify-between items-center">
          <div className="logo">
            <Link
              to="/home"
              className="flex justify-center items-center"
            >
              <img src={logo} className="h-[80px]" />
            </Link>
          </div>

          <ul className="flex flex-row gap-5 items-center">
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
            <li>
              <Link to="/atendimentos">Atendimentos</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/vendas">Vendas</Link>
            </li>
            <li>
              <Link to="/" >Sair</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  } else{
    return (
      <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
        <div className="flex container justify-between items-center">
          <div className="logo">
            <Link
              to="/home"
              className="flex justify-center items-center"
            >
              <img src={logo} className="h-[80px]" />
            </Link>
          </div>

          <ul className="flex flex-row gap-5 items-center">
            <li>
              <Link to="/" >Sair</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
};

export default Header;
