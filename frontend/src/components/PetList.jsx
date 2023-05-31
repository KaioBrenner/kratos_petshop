import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "./PetCard";
useState;

const PetList = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await axios.get("http://localhost:3000/pets");
        const dataPets = response.data;
        setPets(dataPets);
        console.log(dataPets)
      } catch (error) {
        console.log(error);
      }
    }

    fetchPets();
  }, []);

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
        <PetCard key={pet.id}   pet={pet} onUpdate={handleUpdatePet} />
      ))}
    </div>
  );
};

export default PetList;
