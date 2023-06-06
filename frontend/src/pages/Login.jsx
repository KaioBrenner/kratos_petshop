import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

const Login = () => {
  const [employees, setEmployees] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToClientes, setRedirectToClientes] = useState(false);

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

    if (employees[0].user === user && employees[0].password === password) {
      setRedirectToClientes(true);
    }
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (redirectToClientes) {
      window.location.replace("/lista-clientes");
    }
  }, [redirectToClientes]);

  return (
    <div>
      <Header page="login"></Header>

      <div className="w-full h-[92vh] flex justify-center items-center" id="background">
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
