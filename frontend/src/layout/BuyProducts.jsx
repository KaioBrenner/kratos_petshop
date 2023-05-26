import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import dataProducts from "../constants/dataProducts";

const BuyProducts = ({ closeModal }) => {
  return (
    <>
      <div className="bg-gray-100 p-3 rounded-lg relative">
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl font-bold mb-2">Comprar Produtos</h1>
        <form className="flex flex-col gap-4 justify-between w-[670px]">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name">Produto:</label>
              <select
                name="porte"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
              >
                {dataProducts.map(({ name }, index) => (
                  <option value="">{name}</option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="name">Quantidade:</label>
              <input
                type="number"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min={0}
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Preço:</label>
              <input
                type="number"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                value={"22.99"}
              />
            </div>
            <div className="w-full">
              <button
                className="w-[100%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Adicionar à lista
              </button>
            </div>
          </div>
          <div className="max-h-44 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantidade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Excluir
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Ração Premium</td>
                  <td className="px-6 py-4 whitespace-nowrap">12</td>
                  <td className="px-6 py-4 whitespace-nowrap">150.22</td>
                  <td className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">
                    Excluir
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Shampoo Hipoalergênico
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">30.99</td>
                  <td className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">
                    Excluir
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Ração Premium</td>
                  <td className="px-6 py-4 whitespace-nowrap">12</td>
                  <td className="px-6 py-4 whitespace-nowrap">150.22</td>
                  <td className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">
                    Excluir
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Shampoo Hipoalergênico
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">30.99</td>
                  <td className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">
                    Excluir
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Ração Premium</td>
                  <td className="px-6 py-4 whitespace-nowrap">12</td>
                  <td className="px-6 py-4 whitespace-nowrap">150.22</td>
                  <td className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">
                    Excluir
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full">
            <label htmlFor="name">Forma de Pagamento:</label>
            <select
              name="porte"
              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            >
              <option value="">Dinheiro</option>
              <option value="">Pix</option>
              <option value="">Crédito</option>
              <option value="">Débito</option>
            </select>
          </div>

          <div className="flex gap-5">
            <button
              type=""
              className="  w-[100%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
            >
              Efetuar Compra
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BuyProducts;
