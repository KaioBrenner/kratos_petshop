import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import deleteClient from "../constants/fetchClients.js";
import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";

const ClientRow = ({
  fullName,
  cpf,
  tel,
  active,
  cep,
  address,
  district,
  city,
  state,
  id,
  key,
  index,
  page,
}) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    async function deleteClient(clientId) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/cliente/${clientId}`
        );

        return response;
      } catch (error) {
        console.log(error);
      }
    }

    deleteClient(id);
    window.location.reload();
  };

  const handleClick = () => {
    const clientData = {
      fullName: fullName,
      cpf: cpf,
      tel: tel,
      active: active,
      cep: cep,
      address: address,
      district: district,
      city: city,
      state: state,
      id: id,
      key: key,
      index: index,
    };

    navigate("/dados-cliente", { state: clientData });
  };

  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await axios.get("http://localhost:3000/pets");
        const dataPets = response.data;
        setPets(dataPets);
        // console.log(dataPets);
        // console.log(pets[0].owner);
        // console.log(clientId);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPets();
  }, []);

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

  if (page !== "services") {
    return (
      <tr
        className={`w-full text-center bg-white border-b-[1.24px] border-gray-200 hover:bg-gray-100`}
      >
        <td
          className="border-[1.24px] border-gray-200 p-4"
          onClick={handleClick}
        >
          <Link
            to={{
              pathname: "/lista-clientes",
              state: {
                fullName: fullName,
                cpf: cpf,
                tel: tel,
                active: active,
                cep: cep,
                address: address,
                district: district,
                city: city,
                state: state,
                id: id,
                index: index,
              },
            }}
          >
            {fullName}
          </Link>
        </td>
        <td className="border-[1.24px] border-gray-200 p-4">{cpf}</td>
        <td className="border-[1.24px] border-gray-200 p-4">
          {active ? (
            <BiCheck className="m-auto text-green-600" />
          ) : (
            <HiOutlineXMark className="m-auto text-red-500" />
          )}
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer flex justify-center items-center text-2xl"
          onClick={handleDelete}
        >
          <MdDeleteForever></MdDeleteForever>
        </td>
      </tr>
    );
  } else {
    return (
      <tr
        className={`w-full text-center bg-white border-b-[1.24px] border-gray-200 hover:bg-gray-100`}
      >
        <td
          className="border-[1.24px] border-gray-200 p-4"
          onClick={handleClick}
        >
          <Link
            to={{
              pathname: "/clientes",
              state: {
                fullName: fullName,
                cpf: cpf,
                tel: tel,
                active: active,
                cep: cep,
                address: address,
                district: district,
                city: city,
                state: state,
                id: id,
                index: index,
              },
            }}
          >
            {fullName}
          </Link>
        </td>
        <td className="border-[1.24px] border-gray-200 p-4">{cpf}</td>

        <td className="h-full p-4 flex justify-center items-center gap-2">
          {pets.map((pet) => {
            if (id === pet.owner) {
              return (
                <Modal type="addServiceToPet" servicePet={pet} ></Modal>
              );
            }
            return null;
          })}
        </td>
      </tr>
    );
  }

  
};

export default ClientRow;
