import Header from "../components/Header";
import ProductRow from "../components/ProductRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
import axios from "axios";
import dataProducts from "../constants/dataProducts";
import Modal from "../components/Modal";

const ProductList = () => {

  const [products, setProducts] = useState([]);

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
    }, []);

  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center my-20">
        <h1 className="text-5xl text-left font-bold mb-4 container">
          Produtos
        </h1>

        <div className="bg-white p-3 rounded-lg">
          <div className="flex gap-5 justify-start">
            <Modal type="addProduct"></Modal>
            <Modal type="buyProducts"></Modal>
          </div>
          <div className="max-h-[60vh] bg-white overflow-y-auto border border-gray-200  rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoria
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estoque
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    Exclusão
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {products.map(({ name, category, stock, price }) => (
                  <tr className="border-y border-y-gray-200">
                    <td className="px-6 py-4 text-center whitespace-nowrap border-r border-r-gray-200">
                      {name}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border-r border-r-gray-200">
                      {category}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border-r border-r-gray-200">
                      {stock}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border-r border-r-gray-200">
                      {price}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">
                      Excluir
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
