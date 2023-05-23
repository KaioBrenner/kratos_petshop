import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import dataProducts from "../constants/dataProducts";

const BuyProducts = ({ closeModal }) => {
  return (
    <>
      <div class="bg-gray-100 p-3 rounded-lg relative">
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl font-bold mb-2">Comprar Produtos</h1>
        <form className="flex flex-col gap-4 justify-between w-[400px]">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name">Produto:</label>
              <select
                name="porte"
                class="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
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
                className="w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Adicionar à lista
              </button>
            </div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Preço Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ração Premium</td>
                  <td>Quantidade</td>
                  <td>Preço Total</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-5">
            <button
              type=""
              className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
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
