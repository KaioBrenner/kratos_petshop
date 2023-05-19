import React, { useState } from "react";
import addService from "../assets/images/pet-hospital.svg";
import PetRegistration from "../layout/PetRegistration";
import AddService from "../layout/AddService";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (type === "addService") {
    return (
      <div>
        <a
          className="absolute top-2 right-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center"
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
          onClick={() => setIsOpen(true)}
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
