import Header from "../components/Header";
import SaleRow from "../components/SaleRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import Modal from "../components/Modal";

// import dataClients from "../constants/dataClients";

const SalesHistory = () => {
  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center my-20">
        <h1 className="text-5xl text-left font-bold mb-4 container">Histórico de Vendas</h1>

        <div className="bg-white p-3 rounded-lg">
          <div class="max-h-[60vh] bg-white overflow-y-auto border border-gray-200 rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50 sticky top-0">
                <tr>
                  <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CPF
                  </th>
                  <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço Total
                  </th>
                  <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Forma de Pagamento
                  </th>
                  <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data e hora
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {dataClients.map(({ name, cpf, active }) => (
                  <SaleRow name={name} cpf={cpf} active={active}></SaleRow>
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

export default SalesHistory;
