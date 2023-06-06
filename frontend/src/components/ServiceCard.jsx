import pinscher from "../assets/images/pastor-alemão.jpg";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";

const ServiceCard = ({
  serviceId,
  petId,
  ownerId,
  bath,
  shave,
  nails,
  delivery,
  index,
}) => {
  const [pet, setPet] = useState();
  const [client, setClient] = useState();

  // Função para converter base64 para ArrayBuffer
  const base64ToArrayBuffer = (base64) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  };

  // Função para converter ArrayBuffer para base64
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  };

  // Manipulador de eventos para o input de arquivo
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64Data = e.target.result.split(";base64,")[1];
      const arrayBuffer = base64ToArrayBuffer(base64Data);
      setBufferData(arrayBufferToBase64(arrayBuffer));
      setPetData({ ...petData, petPicture: base64Data });
    };

    reader.readAsDataURL(file);
    setShowInput(false);
  };

  console.log(serviceId);
  console.log(petId);

  useEffect(() => {
    async function fetchPet() {
      try {
        const response = await axios.get(
          `http://localhost:3000/getPet/${petId}`
        );
        const dataPet = response.data;
        setPet(dataPet);
        console.log(pet);
        return response; // Retorna a resposta da Promise
      } catch (error) {
        console.log(error);
        throw error; // Lança o erro para que possa ser tratado externamente, se necessário
      }
    }

    async function fetchClient() {
      try {
        const response = await axios.get(
          `http://localhost:3000/getClient/${ownerId}`
        );
        const dataClient = response.data;
        setClient(dataClient);
        console.log(client.fullName);
        return response; // Retorna a resposta da Promise
      } catch (error) {
        console.log(error);
        throw error; // Lança o erro para que possa ser tratado externamente, se necessário
      }
    }

    fetchPet()
      .then((response) => {
        const dataPet = response.data;
        setPet(dataPet);
        console.log(pet);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchClient()
      .then((response) => {
        const dataClient = response.data;
        setClient(dataClient);
        console.log(client);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = () => {
    async function deleteService(serviceId) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/deleteService/${serviceId}`
        );

        return response;
      } catch (error) {
        console.log(error);
      }
    }

    deleteService(serviceId);
    window.location.reload();
  };

  return (
    <div className=" border border-neutral-400 rounded-lg p-4 relative w-[480px] h-max bg-white text-xl font-bold flex flex-row">
      <div className="absolute z-50 w-[40px] h-[40px] bg-white top-[-15px] left-[-10px] border border-gray-400 rounded-full flex justify-center items-center">
        {index + 1}
      </div>
      <div className="w-[50%] relative">
        <img
          src={`data:image/jpeg;base64, ${pet?.petPicture}`}
          alt=""
          width={45}
          className="w-[170px] h-[170px] bg-white mb-4"
        />

        <p>Nome: {pet?.petName}</p>
        <p>Raça: {pet?.race}</p>
        <p>Porte: {pet?.size}</p>
        <p>Idade: {pet?.age}</p>
        <p>Peso: {pet?.weight} Kg</p>
      </div>
      <div className="w-[50%] relative flex flex-col justify-between">
        <div>
          <div>
            Serviços:
            <ul className="list-disc ml-6">
              {bath ? <li>Banho</li> : ""}
              {shave ? <li>Tosa</li> : ""}
              {nails ? <li>Cortar Unhas</li> : ""}
            </ul>
          </div>
          <p>Nome do dono: {client?.fullName.split(" ")[0]}</p>
          <p>Telefone: {client?.tel}</p>
          <div className="relative">
            <p>Levar:</p>
            {delivery ? (
              <p className="absolute left-[60px] top-[7px]  text-green-500">
                <AiOutlineCheck />
              </p>
            ) : (
              <p className="absolute left-[60px] top-[7px]   text-red-500">
                <AiOutlineClose />
              </p>
            )}
          </div>
        </div>

        <button
          className="w-full bg-brand-orange rounded-[8px]  h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white flex justify-center items-center cursor-pointer font-normal"
          onClick={handleDelete}
        >
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
