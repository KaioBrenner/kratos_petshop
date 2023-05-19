import dog from "../assets/images/pastor-alemão.jpg";
import addService from "../assets/images/pet-hospital.svg"

const PetCard = () => {
  return (
    <div className="mb-4 border border-neutral-950 rounded-lg p-4 relative">
      <img
        src={dog}
        alt=""
        width={70}
        className="rounded-full border border-white bg-white m-auto"
      />

      <div className="bg-black">
        <img src={addService} width={45} className="absolute top-2 right-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center"/>
      </div>

      <div className="w-[90%]">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
          readOnly
        />
      </div>
      <div className="w-[90%]">
        <label htmlFor="name">Raça:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
          readOnly
        />
      </div>
      <div className="w-[90%]">
        <label htmlFor="name">Porte:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
          readOnly
        />
      </div>
      <div className="w-[90%]">
        <label htmlFor="name">Idade:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
          readOnly
        />
      </div>
      <div className="w-[90%]">
        <label htmlFor="name">Peso:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
          readOnly
        />
      </div>
      <div className="w-[90%]">
        <label htmlFor="name">Sexo:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl h-6 rounded-lg text-base pl-3 py-5 w-full mt-2"
          readOnly
        />
      </div>
    </div>
  );
};

export default PetCard;
