import Header from "../components/Header";
import ProductRow from "../components/ProductRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";

import dataProducts from "../constants/dataProducts";
import Modal from "../components/Modal";

const ProductList = () => {
  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center my-20">
        <h1 className="text-5xl text-left font-bold mb-4 container">
          Produtos
        </h1>

        <div className="bg-white p-3">
          <div class="max-h-[60vh] bg-white overflow-y-auto border border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50 sticky top-0">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoria
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estoque
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    Exclusão
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {dataProducts.map(({ name, category, stock, price }) => (
                  <tr className="border-y border-y-gray-200">
                    <td class="px-6 py-4 whitespace-nowrap border-r border-r-gray-200">{name}</td>
                    <td class="px-6 py-4 whitespace-nowrap border-r border-r-gray-200">{category}</td>
                    <td class="px-6 py-4 whitespace-nowrap border-r border-r-gray-200">{stock}</td>
                    <td class="px-6 py-4 whitespace-nowrap border-r border-r-gray-200">{price}</td>
                    <td class="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">Excluir</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-5">
            <Modal type="buyProducts"></Modal>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
