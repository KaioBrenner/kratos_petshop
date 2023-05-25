import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const PetRegistration = ({ closeModal }) => {
  return (
    <>
      <div class="bg-gray-100 p-3 rounded-lg relative">
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl font-bold mb-2">Cadastro do Pet</h1>
        <form className="flex flex-col gap-4 justify-between w-[400px]" method="post">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name">Foto:</label>
              <input
                type="file"
                className="inline-block h-22 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl text-base  w-full mt-2"
                accept="image/*"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min="3"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Raça:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min="3"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Porte:</label>
              <select
                name="porte"
                class="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
              >
                <option value="pequeno">Pequeno</option>
                <option value="medio">Médio</option>
                <option value="grande">Grande</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="name">Idade:</label>
              <input
                type="number"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min={0}
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Peso:</label>
              <input
                type="number"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min={0.1}
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Sexo:</label>
              <select
                name="sexo"
                class="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
              >
                <option value="macho">Macho</option>
                <option value="femea">Fêmea</option>
              </select>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              type=""
              className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
            >
              Cadastrar Pet
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PetRegistration;
