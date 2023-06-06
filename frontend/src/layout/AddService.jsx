import React, { useState } from "react";
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
import petDelivery from "../assets/images/pet-delivery.png";
import axios from "axios";

const AddService = ({ closeModal, petName, petId, ownerId }) => {
  const [checkboxValues, setCheckboxValues] = useState({
    bath: false,
    shave: false,
    nails: false,
    delivery: false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function createService(petId, ownerId, serviceData) {
      try {
        const response = await axios.post(
          `http://localhost:3000/newService/${petId}/${ownerId}`,
          serviceData
        );
        console.log(serviceData);
        return response.data; // Se desejar, pode retornar a resposta do servidor
      } catch (error) {
        console.log(error);
      }
    }

    createService(petId, ownerId, checkboxValues);

    console.log(checkboxValues);
    console.log(petId);
    console.log(ownerId);
    window.location.reload();
  };

  return (
    <>
      <form
        className="bg-gray-100 p-3 rounded-lg relative"
        method="post"
        onSubmit={handleSubmit}
      >
        <button
          type="submit"
          className="p-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center absolute right-[70px] top-3"
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
          Adicionar Serviço: {petName}
        </h1>
        <div className="flex flex-col justify-between w-[600px]">
          <div className="flex flex-row justify-between gap-5">
            <label
              htmlFor="bath"
              className="flex items-center cursor-pointer"
              title="Banho"
            >
              <input
                type="checkbox"
                id="bath"
                checked={checkboxValues.bath}
                onChange={handleCheckboxChange}
              />
              <div className="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={petSoap}
                  alt="Imagem de Banho"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>

            <label
              htmlFor="shave"
              className="flex items-center cursor-pointer"
              title="Tosa"
            >
              <input
                type="checkbox"
                id="shave"
                checked={checkboxValues.shave}
                onChange={handleCheckboxChange}
              />
              <div className="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={grooming}
                  alt="Imagem de Tosa"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>
            <label
              htmlFor="nails"
              className="flex items-center cursor-pointer"
              title="Cortar Unhas"
            >
              <input
                type="checkbox"
                id="nails"
                checked={checkboxValues.nails}
                onChange={handleCheckboxChange}
              />
              <div className="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={nailClipper}
                  alt="Imagem de Cortar Unhas"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>
            <label
              htmlFor="delivery"
              className="flex items-center cursor-pointer"
              title="Entrega a domicílio"
            >
              <input
                type="checkbox"
                id="delivery"
                checked={checkboxValues.delivery}
                onChange={handleCheckboxChange}
              />
              <div className="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={petDelivery}
                  alt="Imagem de Entrega a domicílio"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>

            {/* <label for="meuCheckbox" className="flex items-center cursor-pointer">
                <input type="checkbox" id="meuCheckbox" className=""/>
                <div className="w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block  self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
                <img src={petSoap} alt="Imagem do Checkbox" className="w-full h-full object-cover rounded-md"/>
                </div>
            </label> */}
            {/* <button className=" custom-checkbox w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block  self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
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
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddService;
