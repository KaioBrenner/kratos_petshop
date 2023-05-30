import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const PetRegistration = ({ closeModal }) => {
  const location = useLocation();
  const {
    fullName,
    cpf,
    tel,
    active,
    cep,
    address,
    district,
    city,
    state,
    id,
  } = location.state;

  const [bufferData, setBufferData] = useState("");

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
    };

    reader.readAsDataURL(file);
  };



  const [petName, setPetName] = useState("");
  const [race, setRace] = useState("");
  const [size, setSize] = useState("Pequeno");
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [sex, setSex] = useState("Macho");
  const [owner, setOwner] = useState(id);

  const [petPictureError, setPetPictureError] = useState("");
  const [petNameError, setpetNameError] = useState("");
  const [raceError, setRaceError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [weightError, setWeightError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validar o campo de nome completo
    if (petName.length <= 3) {
      setpetNameError("O nome é obrigatório");
    } else {
      setpetNameError("");
    }

    // // Validar o campo de CPF
    // if (cpf.length !== 11) {
    //   setCpfError("O CPF deve ter exatamente 11 dígitos");
    // } else {
    //   setCpfError("");
    // }

    // // Validar o campo de telefone
    // if (tel.length !== 11) {
    //   setTelError("O telefone é obrigatório");
    // } else {
    //   setTelError("");
    // }

    // // Validar o campo de cep
    // if (cep.length !== 8) {
    //   setCepError("O cep é obrigatório");
    // } else {
    //   setCepError("");
    // }

    // if (
    //   !(
    //     fullName.length <= 3 ||
    //     cpf.length !== 11 ||
    //     tel.length !== 11 ||
    //     cep.length !== 8
    //   )
    // ) {
    //   alert("Cliente cadastrado com sucesso!");
    // }

    const petData = {
      petPicture: bufferData,
      petName,
      race,
      size,
      age,
      weight,
      sex,
      owner,
    };

    async function createPet(clientId, petData) {
      try {
        const response = await axios.post(
          `http://localhost:3000/newPet/${clientId}`,
          petData
        );
        console.log(petData);
        return response.data; // Se desejar, pode retornar a resposta do servidor
      } catch (error) {
        console.log(error);
      }
    }

    createPet(id, petData);
  };

  return (
    <>
      <div className="bg-gray-100 p-3 rounded-lg relative">
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl font-bold mb-2">Cadastro do Pet</h1>
        <div className="flex flex-col gap-4 justify-between w-[400px]">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name">Foto:</label>
              <input
                type="file"
                className="inline-block h-22 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl text-base  w-full mt-2"
                accept="image/*"
                onChange={handleFileInputChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min="3"
                defaultValue={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
              {petNameError && <span className="text-red-400 text-sm">{petNameError}</span>}
            </div>
            <div className="w-full">
              <label htmlFor="name">Raça:</label>
              <input
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min="3"
                defaultValue={race}
                onChange={(e) => setRace(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Porte:</label>
              <select
                name="porte"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                defaultValue={size}
                onChange={(e) => {
                  setSize(e.target.value);
                  console.log(e.target.value);
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
                min={0}
                defaultValue={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Peso:</label>
              <input
                type="number"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min={1}
                defaultValue={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Sexo:</label>
              <select
                name="sexo"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                defaultValue={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="macho">Macho</option>
                <option value="femea">Fêmea</option>
              </select>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              type="submit"
              className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
              onClick={handleFormSubmit}
            >
              Cadastrar Pet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetRegistration;
