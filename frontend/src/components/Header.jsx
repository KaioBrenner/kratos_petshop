import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
  // switch (page) {
  //   case "client-data":
  //     return (
  //       <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
  //         <div className="flex container justify-between items-center">
  //           <div className="logo">
  //             <Link to="/lista-clientes">
  //               <img src={logo} className="w-[140px]" />
  //             </Link>
  //           </div>

  //           <ul className="flex flex-row gap-5 items-center">
  //             <li className="font-bold text-lg">Dados do Cliente</li>
  //             <li>
  //               <Link to="/cadastro-cliente">Cadastrar Cliente</Link>
  //             </li>
  //             <li>
  //               <Link to="/">Sair</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </header>
  //     );
  //     break;
  //   case "client-list":
  //     return (
  //       <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
  //         <div className="flex container justify-between items-center">
  //           <div className="logo">
  //             <Link to="/lista-clientes">
  //               <img src={logo} className="w-[140px]" />
  //             </Link>
  //           </div>

  //           <ul className="flex flex-row gap-5 items-center">
  //             <li className="font-bold text-lg">Lista de Clientes</li>
  //             <li>
  //               <Link to="/cadastro-cliente">Cadastrar Cliente</Link>
  //             </li>
  //             <li>
  //               <Link to="/">Sair</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </header>
  //     );
  //     break;
  //   case "client-signup":
  //     return (
  //       <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
  //         <div className="flex container justify-between items-center">
  //           <div className="logo">
  //             <Link to="/lista-clientes">
  //               <img src={logo} className="w-[140px]" />
  //             </Link>
  //           </div>

  //           <ul className="flex flex-row gap-5 items-center">
  //             <li className="font-bold text-lg">Cadastro do Cliente</li>
  //             <li>
  //               <Link to="/cadastro-cliente">Cadastrar Cliente</Link>
  //             </li>
  //             <li>
  //               <Link to="/">Sair</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </header>
  //     );
  //     break;
  //   case "login":
  //     return (
  //       <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
  //         <div className="flex container justify-between items-center">
  //           <div className="logo">
  //             <Link to="/">
  //               <img src={logo} className="w-[140px]" />
  //             </Link>
  //           </div>

  //           <ul className="flex flex-row gap-5">
  //             <li className="font-bold text-lg">Login</li>
  //           </ul>
  //         </div>
  //       </header>
  //     );
  //     break;

  // }

  if (page === "login") {
    return (
      <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
        <div className="flex container justify-between items-center">
          <div className="logo">
            <Link to="/" className="flex justify-center items-center">
              <img src={logo} className="h-[80px]"/>
            </Link>
          </div>

          <ul className="flex flex-row gap-5">
            <li className="font-bold text-lg">Login</li>
          </ul>
        </div>
      </header>
    );
  } else {
    return (
      <header className="sm:px-16 px-6 flex justify-center items-center bg-white h-[8vh]">
        <div className="flex container justify-between items-center">
        <div className="logo">
            <Link to="/lista-clientes" className="flex justify-center items-center">
              <img src={logo} className="h-[80px]"/>
            </Link>
          </div>

          <ul className="flex flex-row gap-5 items-center">
            <li>
              <Link to="/lista-clientes">Clientes</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/lista-produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/historico-vendas">Histórico de Vendas</Link>
            </li>
            <li>
              <Link to="/cadastro-cliente">Cadastrar Cliente</Link>
            </li>
            <li>
              <Link to="/">Sair</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
};

export default Header;
