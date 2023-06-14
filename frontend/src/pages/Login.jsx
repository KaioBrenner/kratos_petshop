import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContextProvider, MyContext } from "../MyContext";

import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        const dataEmployees = response.data;
        setEmployees(dataEmployees);
      } catch (error) {
        console.log(error);
      }
    }

    fetchEmployees();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Lógica de login estará aqui
    if (employees[0].user === user && employees[0].password === password) {
      navigate("/lista-clientes");
    }

  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  // const isLoggedIn = () => {
  //   const loggedIn = localStorage.getItem("loggedIn");
  // };


  

  


  return (
    <div >
      <Header page="login"></Header>

      <div
        className="w-full h-[92vh] flex justify-center items-center"
        id="background"
      >
        <div className=" bg-white w-[450px] h-[400px] text-center rounded-lg flex flex-col items-center px-2 drop-shadow-xl shadow-neutral-900 py-10">
          <h2 className="text-3xl">Login</h2>
          <div className="flex flex-col justify-between w-[80%] mt-10 h-full ">
            <div className="flex flex-col">
              <label htmlFor="user" className="self-start">
                Usuário:
              </label>
              <input
                type="text"
                className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-10 rounded-[8px] text-base pl-3"
                onChange={handleUserChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="self-start">
                Senha:
              </label>
              <input
                type="password"
                className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-10 rounded-[8px] text-base pl-3"
                onChange={handlePasswordChange}
              />
            </div>

            <div>
              <button
                className="bg-brand-orange rounded-[8px] inline-block w-48 h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white gap-16"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// import Header from "../components/Header";
// import ProtectedPage from "../components/ProtectedPage";
// import LoginPage from "../components/LoginPage";

// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <LoginPage />
//         )
//       }
//     />
//   );
// };

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Realize a lógica de autenticação aqui, como verificar o token de autenticação no localStorage ou fazer uma chamada assíncrona para verificar a autenticação do usuário.

//     // Se o usuário estiver autenticado, defina isAuthenticated como true.
//     setIsAuthenticated(true);
//   }, []);

//   return (
//     <Router>
//       <div>
//         <Header />

//         <Switch>
//           <Route path="/login" component={LoginPage} />
//           <PrivateRoute
//             path="/lista-clientes"
//             component={ProtectedPage}
//             isAuthenticated={isAuthenticated}
//           />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
