import React, { useEffect, useState } from "react";
import dog from "../assets/images/pastor-alemão.jpg";
import Modal from "./Modal";
import { Buffer } from "buffer";

const PetCard = ({ pet, onUpdate }) => {
  const {
    id,
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

    const bufferObj = Buffer.from(`${petPicture.data}`, 'utf-8');
    const base64String = bufferObj.toString('base64');

    console.log(base64String)

  return (
    <div className="mb-4 border border-neutral-950 rounded-lg p-4 relative">
      {petPicture && (
        <img
          src={`data:${petPicture.type};base64,/${base64String}`}
          alt="Selected Image"
          className="m-auto rounded-full border-2 border-white bg-white w-24 h-24"
        />
      )}

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
