import Header from "../components/Header";
import ClientRow from "../components/ClientRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { SlMagnifier } from "react-icons/sl";
import Modal from "../components/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
// import fetchClients from "../constants/dataClients";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredClients = clients.filter((client) =>
    client.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="my-4 relative">
          <input
            type="search"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2 "
            onChange={handleSearch}
            placeholder="Pesquisar cliente"
          />
          <SlMagnifier className="absolute top-5 right-4" />
        </div>

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
                {searchTerm
                  ? filteredClients.map(
                      (
                        {
                          fullName,
                          cpf,
                          tel,
                          active,
                          cep,
                          address,
                          district,
                          city,
                          state,
                          _id,
                        },
                        index
                      ) => (
                        <ClientRow
                          fullName={fullName}
                          cpf={cpf}
                          tel={tel}
                          active={active}
                          cep={cep}
                          address={address}
                          district={district}
                          city={city}
                          state={state}
                          id={_id}
                          index={index}
                          key={_id}
                        />
                      )
                    )
                  : clients.map(
                      (
                        {
                          fullName,
                          cpf,
                          tel,
                          active,
                          cep,
                          address,
                          district,
                          city,
                          state,
                          _id,
                        },
                        index
                      ) => (
                        <ClientRow
                          fullName={fullName}
                          cpf={cpf}
                          tel={tel}
                          active={active}
                          cep={cep}
                          address={address}
                          district={district}
                          city={city}
                          state={state}
                          id={_id}
                          index={index}
                          key={_id}
                        />
                      )
                    )}
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
