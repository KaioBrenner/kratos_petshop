import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ProductRegistration = ({ closeModal }) => {
  return (
    <>
      <div className="bg-gray-100 p-3 rounded-lg relative">
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl font-bold mb-2">Cadastro de Produto</h1>
        <form className="flex flex-col gap-4 justify-between w-[400px] text-left">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min="3"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Categoria:</label>
              <select
                name="porte"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
              >
                <option value="alimento">Alimento</option>
                <option value="acessorio">Acessório</option>
                <option value="higiene">Higiene</option>
                <option value="brinquedo">Brinquedo</option>
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
                min={0}
              />
            </div>
          </div>

          <div className="flex gap-5 justify-center">
            <button
              type=""
              className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
            >
              Cadastrar Produto
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductRegistration;
