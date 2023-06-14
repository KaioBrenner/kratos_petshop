import Header from "../components/Header";
import SaleRow from "../components/SaleRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import axios from "axios";

// import dataClients from "../constants/dataClients";

const SalesHistory = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function fetchSales() {
      try {
        const response = await axios.get("http://localhost:3000/sellHistorics");
        const dataSales = response.data;
        setSales(dataSales);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSales();
  }, []);

  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center my-20">
        <h1 className="text-5xl text-left font-bold mb-4 container">
          Histórico de Vendas
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
                    Preço Total
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Forma de Pagamento
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data e hora
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {sales.map(({_id, clientCPF, clientName, totalPrice, dateTime, paymentMethod}) => (
                  <SaleRow _id={_id} clientCPF={clientCPF} clientName={clientName} totalPrice={totalPrice} dateTime={dateTime} paymentMethod={paymentMethod}></SaleRow>
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

export default SalesHistory;
