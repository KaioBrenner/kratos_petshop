import React, { useState } from "react";
import dog from "../assets/images/pastor-alemão.jpg";
import Modal from "./Modal";

const PetCard = ({ pet, onUpdate }) => {
  const { id, name: initialName, breed: initialBreed, size: initialSize, age: initialAge, weight: initialWeight, sex: initialSex } = pet;

  const [name, setName] = useState(initialName);
  const [breed, setBreed] = useState(initialBreed);
  const [size, setSize] = useState(initialSize);
  const [age, setAge] = useState(initialAge);
  const [weight, setWeight] = useState(initialWeight);
  const [sex, setSex] = useState(initialSex);

  const handleSave = () => {
    const updatedPet = {
      id,
      name,
      breed,
      size,
      age,
      weight,
      sex
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
            value={breed}
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

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>
        Salvar
      </button>
    </div>
  );
};

const PetList = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Jacob",
      breed: "Pastor Alemão",
      size: "grande",
      age: 5,
      weight: 30,
      sex: "macho"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Labrador Retriever",
      size: "médio",
      age: 3,
      weight: 25,
      sex: "fêmea"
    },
    {
      id: 3,
      name: "Max",
      breed: "Golden Retriever",
      size: "grande",
      age: 2,
      weight: 27,
      sex: "macho"
    }
  ]);

  const handleUpdatePet = (updatedPet) => {
    const updatedPets = pets.map((pet) => {
      if (pet.id === updatedPet.id) {
        return updatedPet;
      }
      return pet;
    });
    setPets(updatedPets);
  };

  return (
    <div className="flex flex-col gap-4 overflow-y-auto h-[537px]">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} onUpdate={handleUpdatePet} />
      ))}
    </div>
  );
};

export default PetList;
