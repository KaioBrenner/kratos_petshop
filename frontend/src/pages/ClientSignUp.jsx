import Header from "../components/Header";

import { Link } from "react-router-dom";

const ClientSignUp = () => {
  return (
    <div>
      <Header page="client-signup" />

      <div className="w-full h-[92vh] flex justify-center items-center">
        <div className=" bg-white w-[500px] h-[680px] text-center rounded-2xl flex flex-col items-center justify-evenly p-4 drop-shadow-xl shadow-neutral-900">
          <h1 className="text-2xl font-bold">Cadastro</h1>
          <form action="" method="post" className="flex flex-col w-[80%] gap-6">
            <div className="text-left">
              <h3>Dados do Cliente</h3>
              <div className="flex flex-wrap justify-between">
                <div className="w-full">
                  <label htmlFor="name">Nome Completo:</label>
                  <input
                    type="text"
                    className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-3 w-full "
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="phone">Telefone:</label>
                  <input
                    type="text"
                    className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="cpf">CPF:</label>
                  <input
                    type="text"
                    className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-3 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="text-left">
              <h3>Endereço</h3>
              <div className="flex flex-wrap justify-between">
                <div className="w-full">
                  <label htmlFor="name">Cep:</label>
                  <input
                    type="text"
                    className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="phone">Rua:</label>
                  <input
                    type="text"
                    className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="cpf">Bairro:</label>
                  <input
                    type="text"
                    className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="cpf">Cidade:</label>
                  <input
                    type="text"
                    className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="cpf">Estado:</label>
                  <input
                    type="text"
                    className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-3 w-full"
                  />
                </div>
              </div>
            </div>

            <button className=" w-full bg-brand-orange rounded-3xl py-2 px-10 hover:shadow-xl hover:text-white">
              Cadastrar
            </button>
          </form>

          <Link
            to="/lista-clientes"
            className="hover:text-brand-orange hover:underline text-sm"
          >
            Voltar a tela inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientSignUp;
