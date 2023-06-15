import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {MdDeleteForever} from "react-icons/md"
import deleteClient from "../constants/fetchClients.js";
import { useEffect } from "react";

const ClientRow = ({ fullName, cpf, tel, active, cep, address, district, city, state, id, key, index }) => {
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
      index: index
    };

    navigate("/dados-cliente", { state: clientData });
  };
  return (
    <tr
      className={`w-full text-center bg-white border-b-[1.24px] border-gray-200 hover:bg-gray-100`}
    >
      <td className="border-[1.24px] border-gray-200 p-4"
      onClick={handleClick}>
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
};

export default ClientRow;
