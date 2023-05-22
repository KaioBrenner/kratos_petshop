import dog from "../assets/images/pastor-alemão.jpg";
import Modal from "./Modal";

const PetCard = () => {
  return (
    <div className="mb-4 border border-neutral-950 rounded-lg p-4 relative">
      <img
        src={dog}
        alt=""
        width={70}
        className="rounded-full border border-white bg-white m-auto"
      />

      <Modal type="addService"></Modal>

      <div className="w-full">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
          value="Joseph"
          readOnly
        />
      </div>
      <div className="w-full">
        <label htmlFor="name">Raça:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
          value="Pasto Alemão"
          readOnly
        />
      </div>
      <div className="w-full">
        <label htmlFor="name">Porte:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
          value="Grande"
          readOnly
        />
      </div>
      <div className="w-full">
        <label htmlFor="name">Idade:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
          value="3"
          readOnly
        />
      </div>
      <div className="w-full">
        <label htmlFor="name">Peso:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
          value="33"
          readOnly
        />
      </div>
      <div className="w-full">
        <label htmlFor="name">Sexo:</label>
        <input
          type="text"
          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
          value="Macho"
          readOnly
        />
      </div>
    </div>
  );
};

export default PetCard;
