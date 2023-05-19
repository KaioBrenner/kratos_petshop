import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import grooming from "../assets/images/grooming.svg";
import medicalReport from "../assets/images/medical-report.svg";
import petBox from "../assets/images/pet-box.svg";
import petFood from "../assets/images/pet-food.svg";
import petHospital from "../assets/images/pet-hospital.svg";
import petShop from "../assets/images/pet-shop.svg";
import petSoap from "../assets/images/pet-soap.svg";
import Pet from "../assets/images/pet.svg";
import vetApp from "../assets/images/vet-app.svg";
import nailClipper from "../assets/images/nail-clipper.svg";

const AddService = ({ closeModal }) => {
  return (
    <>
      <div class="bg-gray-100 p-3 rounded-lg relative">
        <button
          className="p-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center absolute right-[70px] top-3"
          onClick={closeModal}
        >
          <AiOutlineCheck />
        </button>
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl text-left font-bold mb-2 leading-none">
          Adicionar Serviço ao Chico Bento
        </h1>
        <div className="flex flex-col justify-between w-[600px]">
          <div className="flex flex-row gap-5">
            <button className="  w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block  self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              <img src={petSoap} alt="" />
            </button>
            <button className="  w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              <img src={grooming} alt="" />
            </button>
            <button className="  w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              <img src={nailClipper} alt="" />
            </button>
            <button className="  w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              <img src={petBox} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
