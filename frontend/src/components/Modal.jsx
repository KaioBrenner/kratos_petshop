import React, { useEffect, useState } from "react";
import addService from "../assets/images/pet-hospital.svg";
import PetRegistration from "../layout/PetRegistration";
import AddService from "../layout/AddService";
import ProductRegistration from "../layout/ProductRegistration";
import ProductEdit from "../layout/ProductEdit";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineCheck,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import ClientRow from "./ClientRow";
import { SlMagnifier } from "react-icons/sl";
import axios from "axios";
import BuyProducts from "../layout/BuyProducts";
import grave from "../assets/images/pet-grave.svg";
import knowMore from "../assets/images/pet-box.svg";

const Modal = ({
  type,
  productName,
  category,
  stock,
  price,
  productId,
  handleDelete,
  petName,
  petId,
  ownerId,
  serviceId,
  pet,
  client,
  comments,
  servicePet,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredClients = clients.filter((client) =>
    client.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await axios.get("http://localhost:3000/clients");
        const dataClients = response.data;
        setClients(dataClients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchClients();
  }, []);

  if (type === "addService") {
    return (
      <div>
        <a
          className="absolute top-2 left-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center"
          onClick={() => setIsOpen(true)}
        >
          <img src={addService} width={45} alt="Add Service" />
        </a>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <AddService
                closeModal={closeModal}
                petName={petName}
                petId={petId}
                ownerId={ownerId}
              ></AddService>
            </div>
          </div>
        )}
      </div>
    );
  } else if (type === "addPet") {
    return (
      <>
        <button
          className=" w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 "
          onClick={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
        >
          Adicionar Pet
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <PetRegistration closeModal={closeModal}></PetRegistration>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "addProduct") {
    return (
      <>
        <button
          className="w-[15%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2"
          onClick={() => setIsOpen(true)}
        >
          Adicionar Produto
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <ProductRegistration
                closeModal={closeModal}
                type="addProduct"
              ></ProductRegistration>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "editProduct") {
    return (
      <>
        <button className="" onClick={() => setIsOpen(true)}>
          {productName}
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <ProductEdit
                closeModal={closeModal}
                productName={productName}
                category={category}
                stock={stock}
                price={price}
                productId={productId}
              ></ProductEdit>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "clientSignUp") {
    return (
      <>
        <button
          className="w-[15%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2"
          onClick={() => navigate("/cadastro-cliente")}
        >
          Cadastrar Cliente
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <ProductRegistration
                closeModal={closeModal}
              ></ProductRegistration>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "buyProductsClient") {
    return (
      <>
        <button
          className=" w-[54px] box-border bg-green-500 rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 "
          onClick={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
        >
          <BsCartPlusFill className="text-2xl w-full"></BsCartPlusFill>
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <BuyProducts closeModal={closeModal} />
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "sellProducts") {
    return (
      <>
        <button
          className=" w-[15%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 "
          onClick={() => setIsOpen(true)}
        >
          Vender Produtos
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <BuyProducts closeModal={closeModal} />
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "deletePet") {
    return (
      <>
        <button
          className="absolute top-2 right-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center h-[45px]"
          onClick={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
        >
          <img src={grave} width={45} alt="Túmulo pet" />
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <div className="bg-gray-100 p-3 rounded-lg relative h-28">
                <button
                  type="submit"
                  className="p-4  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center absolute right-[70px] bottom-3"
                  onClick={handleDelete}
                >
                  <AiOutlineCheck />
                </button>
                <button
                  className="p-4  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center absolute right-3 bottom-3"
                  onClick={closeModal}
                >
                  <AiOutlineClose />
                </button>
                <h1 className="text-2xl font-bold mb-2">
                  Tem certeza que deseja excluir este pet?
                </h1>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "serviceCard") {
    return (
      <>
        <button
          className="absolute top-[-32px] right-[-30px] border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center h-[45px] w-[45px] flex justify-center items-center"
          onClick={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
        >
          {/* <img src={knowMore} width={45} alt="Túmulo pet" /> */}
          <AiOutlineInfoCircle className="w-full text-[3rem]"></AiOutlineInfoCircle>
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end  w-[400px] z-50">
              <div className="bg-gray-100 p-3 rounded-lg relative w-full">
                <button
                  className="p-4 bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded text-center absolute right-3 top-3"
                  onClick={closeModal}
                >
                  <AiOutlineClose />
                </button>
                <h1 className="text-2xl font-bold mb-2">Dados do Pet</h1>
                <div>
                  <p>
                    Nome:{" "}
                    <span className="font-montserrat font-normal text-lg">
                      {pet?.petName}
                    </span>
                  </p>
                  <p>
                    Raça:{" "}
                    <span className="font-montserrat font-normal text-lg">
                      {pet?.race}
                    </span>
                  </p>
                  <p>
                    Porte:{" "}
                    <span className="font-montserrat font-normal text-lg">
                      {pet?.size}
                    </span>
                  </p>
                  <p>
                    Idade:{" "}
                    <span className="font-montserrat font-normal text-lg">
                      {pet?.age}
                    </span>
                  </p>
                  <p>
                    Peso:{" "}
                    <span className="font-montserrat font-normal text-lg">
                      {pet?.weight} Kg
                    </span>
                  </p>
                  <p>
                    Nome do dono:{" "}
                    <span className="font-montserrat font-normal text-lg">
                      {client?.fullName.split(" ")[0]}
                    </span>
                  </p>
                  <p>
                    Telefone:{" "}
                    <span className="font-montserrat font-normal text-lg">
                      {client?.tel}
                    </span>
                  </p>
                  <textarea
                    className="w-full mt-4 h-28"
                    value={comments}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "addServiceInServicesPage") {
    return (
      <>
        <button
          className="w-[50px] border-2 border-black rounded-full"
          onClick={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
        >
          <img src={addService} alt="Adicionar atendimento" />
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end w-[1000px] ">
              <div className="bg-gray-100 p-3 w-full rounded-lg relative">
                <button
                  className="p-4  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center absolute right-3 top-3"
                  onClick={closeModal}
                >
                  <AiOutlineClose />
                </button>
                <h1 className="text-2xl text-left font-bold leading-none">
                  Adicionar Serviço
                </h1>
                <div className="mt-12">
                  <div className="my-4 relative">
                    <input
                      type="search"
                      className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2 "
                      onChange={handleSearch}
                      placeholder="Pesquisar cliente"
                    />
                    <SlMagnifier className="absolute top-5 right-4" />
                  </div>

                  <div className="bg-white p-3 rounded-lg">
                    <div className="max-h-[60vh] bg-white overflow-y-auto border border-gray-200 rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 sticky top-0">
                          <tr>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Nome
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              CPF
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Pets
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {searchTerm
                            ? filteredClients.map(
                                (
                                  {
                                    fullName,
                                    cpf,
                                    tel,
                                    active,
                                    cep,
                                    address,
                                    district,
                                    city,
                                    state,
                                    _id,
                                  },
                                  index
                                ) => (
                                  <ClientRow
                                    fullName={fullName}
                                    cpf={cpf}
                                    tel={tel}
                                    active={active}
                                    cep={cep}
                                    address={address}
                                    district={district}
                                    city={city}
                                    state={state}
                                    id={_id}
                                    index={index}
                                    key={_id}
                                    page="services"
                                  />
                                )
                              )
                            : clients.map(
                                (
                                  {
                                    fullName,
                                    cpf,
                                    tel,
                                    active,
                                    cep,
                                    address,
                                    district,
                                    city,
                                    state,
                                    _id,
                                  },
                                  index
                                ) => (
                                  <ClientRow
                                    fullName={fullName}
                                    cpf={cpf}
                                    tel={tel}
                                    active={active}
                                    cep={cep}
                                    address={address}
                                    district={district}
                                    city={city}
                                    state={state}
                                    id={_id}
                                    index={index}
                                    key={_id}
                                    page="services"
                                  />
                                )
                              )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "addServiceToPet") {
    return (
      <div>
        <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <img
            src={`data:image/jpeg;base64, ${servicePet?.petPicture}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full bg-white"
          />
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-black flex flex-col items-end">
              <AddService
                closeModal={closeModal}
                petName={servicePet?.petName}
                petId={servicePet?._id}
                ownerId={servicePet?.owner}
              ></AddService>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Modal;

{
  /* <a
        className="absolute top-2 right-2 border border-gray-600 rounded-full bg-brand-orange-faded cursor-pointer slide-bck-center"
        onClick={() => setIsOpen(true)}
      >
        <img src={addService} width={45} alt="Add Service" />
      </a> */
}
