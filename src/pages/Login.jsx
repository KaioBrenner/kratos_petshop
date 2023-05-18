import { Link } from "react-router-dom";


import Header from "../components/Header";

const Login = () => {

  // const users = [
  //   {
  //     user: "kaio",
  //     password: "kaio123"
  //   },
  //   {
  //     user: "lucas",
  //     password: "lucas123"
  //   },
  //   {
  //     user: "gabriel",
  //     password: "gabriel123"
  //   }
  // ]

  return (
    <div>
      <Header page="login"></Header>


      <div className="w-full h-[92vh] flex justify-center items-center">
        <div className=" bg-white w-[450px] h-[400px] text-center rounded-lg flex flex-col items-center px-2 drop-shadow-xl shadow-neutral-900 py-10">
          <h2 className="text-3xl">Login</h2>
          <form
            action=""
            method="post"
            className="flex flex-col justify-between w-[80%] mt-10 h-full "
          >
            <div className="flex flex-col">
              <label htmlFor="user" className="self-start">
                Usuário:
              </label>
              <input
                type="text"
                className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-10 rounded-[8px] text-base pl-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="self-start">
                Senha:{" "}
              </label>
              <input
                type="password"
                className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-10 rounded-[8px] text-base pl-3"
              />
            </div>

            <div>
              <button type="submit" className="bg-brand-orange rounded-[8px] inline-block w-48 h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white">
                <Link to="/lista-clientes" className="gap-16">Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
