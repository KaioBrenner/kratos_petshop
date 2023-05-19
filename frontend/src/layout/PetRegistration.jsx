import React from "react";

const PetRegistration = () => {
  return (
    <>
      <div class="bg-gray-100 p-3 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Cadastro do Pet</h1>
        <div className="flex flex-col justify-between w-[400px] h-[400px]">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Raça:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Porte:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Idade:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <button className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              Cadastrar Pet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetRegistration;
