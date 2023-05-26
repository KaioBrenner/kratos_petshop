import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import axios from "axios";
import deleteClient from "../constants/fetchClients.js";
import { useEffect } from "react";

const ClientRow = ({ id, name, cpf, active }) => {
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

  return (
    <tr
      className={`w-full text-center bg-white border-b-[1.24px] border-gray-200 hover:bg-gray-100`}
    >
      <td className="border-[1.24px] border-gray-200 p-4">
        <Link to="/dados-cliente" className="w-full h-full inline-block">
          {name}
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
      <td className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer"
      onClick={handleDelete}>
        Excluir
      </td>
    </tr>
  );
};

export default ClientRow;
