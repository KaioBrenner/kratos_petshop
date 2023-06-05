import React, { useState } from "react";
import addService from "../assets/images/pet-hospital.svg";
import PetRegistration from "../layout/PetRegistration";
import AddService from "../layout/AddService";
import ProductRegistration from "../layout/ProductRegistration";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import BuyProducts from "../layout/BuyProducts";
import grave from "../assets/images/pet-grave.svg";

const Modal = ({ type, name, handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (type === "addService") {
    return (
      <div>
        <a
          className="absolute top-2 left-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center"
          onClick={() => setIsOpen(true)}
        >
          <img src={addService} width={45} alt="Add Service" />
        </a>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <AddService closeModal={closeModal}></AddService>
            </div>
          </div>
        )}
      </div>
    );
  } else if (type === "addPet") {
    return (
      <>
        <button
          className=" w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 "
          onClick={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
        >
          Adicionar Pet
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <PetRegistration closeModal={closeModal}></PetRegistration>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "addProduct") {
    return (
      <>
        <button
          className="w-[15%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mb-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2"
          onClick={() => setIsOpen(true)}
        >
          Adicionar Produto
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <ProductRegistration
                closeModal={closeModal}
              ></ProductRegistration>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "buyProductsClient") {
    return (
      <>
        <button
          className=" w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 "
          onClick={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
        >
          Comprar Produtos
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <BuyProducts closeModal={closeModal} />
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "buyProducts") {
    return (
      <>
        <button
          className=" w-[15%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mb-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 "
          onClick={() => setIsOpen(true)}
        >
          Comprar Produtos
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <BuyProducts closeModal={closeModal} />
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "deletePet") {
    return (
      <>
        <button
          className="absolute top-2 right-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center h-[45px]"
          onClick={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
        >
          <img src={grave} width={45} alt="Túmulo pet" />
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <div className="bg-gray-100 p-3 rounded-lg relative h-28">
                <button
                  type="submit"
                  className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center absolute right-[70px] bottom-3"
                  onClick={handleDelete}
                >
                  <AiOutlineCheck />
                </button>
                <button
                  className="p-4 bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded text-center absolute right-3 bottom-3"
                  onClick={closeModal}
                >
                  <AiOutlineClose />
                </button>
                <h1 className="text-2xl font-bold mb-2">
                  Tem certeza que deseja excluir este pet?
                </h1>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default Modal;

{
  /* <a
        className="absolute top-2 right-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center"
        onClick={() => setIsOpen(true)}
      >
        <img src={addService} width={45} alt="Add Service" />
      </a> */
}
