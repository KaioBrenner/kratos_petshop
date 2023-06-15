import Header from "../components/Header";
import SaleRow from "../components/SaleRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import Modal from "../components/Modal";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// import dataClients from "../constants/dataClients";

const SalesHistory = () => {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const dataClients = response.data;
        setProducts(dataClients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
    console.log(products)
  }, []);

  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center mt-10">
      <h1 className="text-5xl relative text-left font-bold mb-4 w-full">
          Vendas
          <div className="absolute text-[50px] bottom-0 right-0">
            <Link to="/home">
              <FiArrowLeftCircle></FiArrowLeftCircle>
            </Link>
          </div>
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
                {sales.map(({_id, clientCPF, clientName, totalPrice, dateTime, paymentMethod, cart}) => (
                  <SaleRow _id={_id} clientCPF={clientCPF} clientName={clientName} totalPrice={totalPrice} dateTime={dateTime} paymentMethod={paymentMethod} cart={cart}></SaleRow>
                )
                  
                )}
              </tbody>
            </table>

            
          </div>
          <div className="flex gap-5 justify-start">
            <Modal type="sellProducts"></Modal>
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
