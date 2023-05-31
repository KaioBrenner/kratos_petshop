import { useState } from "react";
import PetCard from "./PetCard";
useState;

const PetList = () => {
  const [pets, setPets] = useState([])

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
