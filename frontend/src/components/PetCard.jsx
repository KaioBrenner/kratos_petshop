import React, { useEffect, useState } from "react";
import dog from "../assets/images/pastor-alemão.jpg";
import Modal from "./Modal";
import { Buffer } from "buffer";
import grave from "../assets/images/pet-grave.svg";
import axios from "axios";

const PetCard = ({ pet, onUpdate }) => {
  const { _id, petPicture, petName, race, size, age, weight, sex } = pet;
  const [showInput, setShowInput] = useState(true);
  const [bufferData, setBufferData] = useState("");


  const [petData, setPetData] = useState({
    petPicture,
    petName,
    race,
    size,
    age,
    weight,
    sex,
  });

  // const [petPicture, setPetPicture] = useState(initialPicture)


  const handleDelete = () => {
    async function deletePet(petId) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/deletePet/${petId}`
        );

        return response;
      } catch (error) {
        console.log(error);
      }
    }

    console.log(pet);
    deletePet(_id);
    window.location.reload();
  };


  // Função para converter base64 para ArrayBuffer
  const base64ToArrayBuffer = (base64) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  };

  // Função para converter ArrayBuffer para base64
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  };

  // Manipulador de eventos para o input de arquivo
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64Data = e.target.result.split(";base64,")[1];
      const arrayBuffer = base64ToArrayBuffer(base64Data);
      setBufferData(arrayBufferToBase64(arrayBuffer));
      setPetData({ ...petData, petPicture: base64Data });
    };

    reader.readAsDataURL(file);
    setShowInput(false);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    // if(!bufferData){
    //   setBufferDataError("A foto é obrigatória");
    // } else {
    //   setBufferDataError("");
    // }
    
    // if (petName.length < 3) {
    //   setpetNameError("O nome é obrigatório");
    // } else {
    //   setpetNameError("");
    // }

    // // Validar o campo de CPF
    // if (race.length < 3) {
    //   setRaceError("A raça é obrigatória");
    // } else {
    //   setRaceError("");
    // }

    // // Validar o campo de telefone
    // if (!(age) || age < 0) {
    //   setAgeError("A idade mínima é de 0 anos");
    // } else {
    //   setAgeError("");
    // }

    // // Validar o campo de cep
    // if (!(weight) || weight < 0.5) {
    //   setWeightError("O peso mínimo é de 0.5Kg");
    // } else {
    //   setWeightError("");
    // }

    // if(!(!bufferData || petName.length < 3 || race.length < 3 || !(age) || age < 0 || !(weight) || weight < 0.5)){
    //   alert("Pet cadastrado com sucesso!")
    //   window.location.reload()
    // }

    // const petData = {
    //   petPicture: bufferData,
    //   petName,
    //   race,
    //   size,
    //   age,
    //   weight,
    //   sex,
    //   owner,
    // };


    async function updatePet(petId, petData) {
      try {
        const response = await axios.put(
          `http://localhost:3000/updatePet/${petId}`,
          petData
        );
        return response.data; // Se desejar, pode retornar a resposta do servidor
      } catch (error) {
        console.log(error);
      }
    }

    updatePet(_id, petData);

  };

  return (
    <div className="mb-4 border border-neutral-950 rounded-lg p-4 relative">
      <div>
        {bufferData && (
          <div>
            <label htmlFor="fileInput">
              <img
                src={`data:image/jpeg;base64, ${bufferData}`}
                alt="Imagem"
                className="w-[90px] h-[90px] m-auto rounded-full border-2 border-white bg-white cursor-pointer"
              />
            </label>
            <input
              id="fileInput"
              type="file"
              className="h-22 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl text-base w-full mt-2 hidden"
              accept="image/*"
              onChange={handleFileInputChange}
            />
          </div>
        )}
        {(petPicture && showInput) && (
          <div>
            <label htmlFor="fileInput">
              <img
                src={`data:image/jpeg;base64, ${petPicture}`}
                alt="Imagem"
                className="w-[90px] h-[90px] m-auto rounded-full border-2 border-white bg-white cursor-pointer"
              />
            </label>
            <input
              id="fileInput"
              type="file"
              className="h-22 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl text-base w-full mt-2 hidden"
              accept="image/*"
              onChange={handleFileInputChange}
            />
          </div>
        )}
      </div>

      <div
        className="absolute top-2 right-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center"
        onClick={handleDelete}
      >
        <img src={grave} width={45} alt="Túmulo pet" />
      </div>

      <Modal type="addService"></Modal>

      <div className="flex flex-col gap-4">
        <div className="w-full">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            min="3"
            defaultValue={petData.petName}
            onChange={(e) => {
              setPetData({ ...petData, petName: e.target.value });
              console.log(petData);
            }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Raça:</label>
          <input
            type="text"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            min="3"
            defaultValue={petData.race}
            onChange={(e) => {
              setPetData({ ...petData, race: e.target.value });
              console.log(petData);
            }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Porte:</label>
          <select
            name="porte"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            defaultValue={petData.size}
            onChange={(e) => {
              setPetData({ ...petData, size: e.target.value });
              console.log(petData);
            }}
          >
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="name">Idade:</label>
          <input
            type="number"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            defaultValue={petData.age}
            onKeyDown={(e) => {
              if (!/\d/.test(e.key) && e.key !== "Backspace") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              setPetData({ ...petData, age: parseInt(e.target.value) });
              console.log(petData);
            }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Peso:</label>
          <input
            type="number"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            defaultValue={petData.weight}
            onKeyDown={(e) => {
              if (!/\d/.test(e.key) && e.key !== "Backspace" && e.key !== ".") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              setPetData({ ...petData, weight: parseFloat(e.target.value) });
              console.log(petData);
            }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Sexo:</label>
          <select
            name="sexo"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            defaultValue={petData.sex}
            onChange={(e) => {
              setPetData({ ...petData, sex: e.target.value });
              console.log(petData);
            }}
          >
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>
      </div>

      <button
        className="w-[25%] bg-brand-orange rounded-[8px]  h-10 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white flex justify-center items-center cursor-pointer "
        onClick={handleFormSubmit}
      >
        Salvar
      </button>
    </div>
  );
};

export default PetCard;
