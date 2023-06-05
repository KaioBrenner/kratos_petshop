import pinscher from "../assets/images/pastor-alemão.jpg";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const ServiceCard = () => {
  return (
    <div className=" border border-neutral-400 rounded-lg p-4 relative w-[460px] h-[292px] bg-white text-xl flex flex-row">
      <div className="absolute z-50 w-[40px] h-[40px] bg-white top-[-15px] left-[-10px] border border-gray-400 rounded-full flex justify-center items-center">
        1
      </div>
      <div className="w-[50%] relative">
        <img src={pinscher} alt="" width={45} className="w-[80%] bg-white mb-4"/>

        <p>Nome: Lilee</p>
        <p>Raça: Pug</p>
      </div>
      <div className="w-[50%] relative">
        <p>Porte: Pequeno</p>
        <p>Idade: 10 anos</p>
        <p>Peso: 10 kg</p>
        <p>Serviço: Banho</p>
        <p>Nome do dono: Pedro</p>
        <p>Telefone: 75981818181</p>
        <p>Levar:</p>
        <p className="absolute left-[60px] top-[174px] text-green-500"><AiOutlineCheck/></p>

        <button className="w-full bg-brand-orange rounded-[8px]  h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white flex justify-center items-center cursor-pointer ">
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
