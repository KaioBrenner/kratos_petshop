import Header from "../components/Header";
import UserRow from "../components/UserRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";

import dataUsers from "../constants/dataUsers";

const ClientList = () => {
  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center my-20">
        <h1 className="text-5xl text-left font-bold mb-4">Clientes</h1>

        <div className="flex container justify-between flex-col bg-white m-auto max-h-[726px]">
          <table className="w-full overflow-y-scroll">
            <thead>
              <tr className="w-full">
                <th className="border border-gray-950 p-3">Nome completo</th>
                <th className="border border-gray-950 p-3">CPF</th>
                <th className="border border-gray-950 p-3">Ativo</th>
              </tr>
            </thead>
            <tbody className="w-full overflow-y-scroll">
              {dataUsers.map(({ name, cpf, active }, index) => (
                <UserRow name={name} cpf={cpf} active={active} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ClientList;
