import Header from "../components/Header";
import UserRow from "../components/ClientRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import Modal from "../components/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
// import fetchClients from "../constants/dataClients";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await axios.get("http://localhost:3000/clients");
        const dataClients = response.data;
        setClients(dataClients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchClients();
  }, []);




  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center my-20">
        <h1 className="text-5xl text-left font-bold mb-4 container">
          Clientes
        </h1>

        <div className="bg-white p-3 rounded-lg">
          <div className="max-h-[60vh] bg-white overflow-y-auto border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CPF
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ativo
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    Exclusão
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {clients.map(({fullName, cpf, active, _id}) => (
                  <UserRow name={fullName} cpf={cpf} active={active} id={_id}></UserRow>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="flex gap-5">
            <Modal type="buyProducts"></Modal>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default ClientList;
