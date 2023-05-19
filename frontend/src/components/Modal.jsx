import React, { useState } from "react";
import addService from "../assets/images/pet-hospital.svg";
import PetRegistration from "../layout/PetRegistration";
import { AiOutlineClose } from 'react-icons/ai';


const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

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
            <button
              className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
            <PetRegistration></PetRegistration>
          </div>
        </div>
      )}
    </div>
  );
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
