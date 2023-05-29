import React, { useState } from "react";
import dog from "../assets/images/pastor-alemão.jpg";
import Modal from "./Modal";

const PetCard = ({ pet, onUpdate }) => {
  const { id, petPicture: initialPicture, name:initialName,  race: initialRace,  size:initialSize,  age: initialAge,  weight: initialWeight,  sex: initialSex,  owner: initialOwner } = pet;

  const [name, setName] = useState(initialName);
  const [petPicture, setPetPicture] = useState(initialPicture)
  const [race, setRace] = useState(initialRace)
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

  return (
    <div className="mb-4 border border-neutral-950 rounded-lg p-4 relative">
      <img
        src={dog}
        alt=""
        width={70}
        className="rounded-full border-2 border-white bg-white m-auto"
      />

      <Modal type="addService"></Modal>

      <div className="flex flex-col gap-4">
        <div className="w-full">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            min="3"
            value={name}
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
            min={0}
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Peso:</label>
          <input
            type="number"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
            min={0.1}
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

      <button className="w-[25%] bg-brand-orange rounded-[8px]  h-10 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white flex justify-center items-center cursor-pointer " onClick={handleSave}>
        Salvar
      </button>
    </div>
  );
};


export default PetCard