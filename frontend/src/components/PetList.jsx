import { useState } from "react";
import PetCard from "./PetCard";
useState;

const PetList = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      petPicture: undefined,
      name: "Jacob",
      race: "Pasto Alemão",
      size: "Médio",
      age: 2,
      weight: 24,
      sex: "macho",
      owner: undefined,
    },
    {
      id: 2,
      petPicture: undefined,
      name: "Jacob",
      race: "Pasto Alemão",
      size: "Médio",
      age: 2,
      weight: 24,
      sex: "macho",
      owner: undefined,
    },
    {
      id: 3,
      petPicture: undefined,
      name: "Jacob",
      race: "Pasto Alemão",
      size: "Médio",
      age: 2,
      weight: 24,
      sex: "macho",
      owner: undefined,
    },
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
