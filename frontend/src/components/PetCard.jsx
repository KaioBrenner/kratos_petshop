import React, { useEffect, useState } from "react";
import dog from "../assets/images/pastor-alemão.jpg";
import Modal from "./Modal";
import { Buffer } from "buffer";
import grave from "../assets/images/pet-grave.svg"
import axios from "axios";

const PetCard = ({ pet, onUpdate }) => {
  const {
    _id,
    petPicture,
    name: initialName,
    race: initialRace,
    size: initialSize,
    age: initialAge,
    weight: initialWeight,
    sex: initialSex,
    owner: initialOwner,
  } = pet;

  // const [petPicture, setPetPicture] = useState(initialPicture)
  const [bufferData, setBufferData] = useState("");
  const [name, setName] = useState(initialName);
  const [race, setRace] = useState(initialRace);
  const [size, setSize] = useState(initialSize);
  const [age, setAge] = useState(initialAge);
  const [weight, setWeight] = useState(initialWeight);
  const [sex, setSex] = useState(initialSex);

  const handleSave = () => {
    const updatedPet = {
      id,
      petPicture,
      name,
      race,
      size,
      age,
      weight,
      sex,
      owner,
    };
    onUpdate(updatedPet);
  };

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

    console.log(pet)
    deletePet(_id);
    window.location.reload();
  };

  // console.log(petPicture)

  // const bufferData = Buffer.from('Hello, World!');
  // const base64String = bufferData.toString('base64');

  // console.log('Base64 String:', base64String);

  return (
    <div className="mb-4 border border-neutral-950 rounded-lg p-4 relative">
      <div>
        {petPicture && (
          <img
            src={`data:image/jpeg;base64, ${petPicture}`}
            alt="Imagem"
            className="w-[90px] h-[90px] m-auto rounded-full border-2 border-white bg-white"
          />
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
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            min="3"
            value={pet.petName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Raça:</label>
          <input
            type="text"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            min="3"
            value={race}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Porte:</label>
          <select
            name="porte"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            value={size}
            onChange={(e) => setSize(e.target.value)}
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
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Peso:</label>
          <input
            type="number"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Sexo:</label>
          <select
            name="sexo"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
        </div>
      </div>

      <button
        className="w-[25%] bg-brand-orange rounded-[8px]  h-10 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white flex justify-center items-center cursor-pointer "
        onClick={handleSave}
      >
        Salvar
      </button>
    </div>
  );
};

export default PetCard;
