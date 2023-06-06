import Header from "../components/Header";
import Modal from "../components/Modal";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import PetList from "../components/PetList";
import { useEffect, useState } from "react";

const ClientData = () => {
  const location = useLocation();
  const {
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
  } = location.state;

  const [clientData, setClientData] = useState({
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
  });

  useEffect(() => {
    setClientData({
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
    });
  }, [fullName, cpf, tel, active, cep, address, district, city, state, id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    async function updateClient(clientData) {
      try {
        const response = await axios.put(
          `http://localhost:3000/updateClient/${clientData.id}`,
          clientData
        );

        alert("Dados do cliente salvos com sucesso!");
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }

    await updateClient(clientData);
  };

  useEffect(() => {
    console.log(clientData);
  }, [clientData]);

  return (
    <div>
      <Header page="client-data" />

      <div className="w-full h-[92vh] flex justify-center items-center">
        <div className=" bg-white w-[1200px] h-[650px] text-center rounded-lg flex flex-col items-center justify-evenly p-4 drop-shadow-xl shadow-neutral-900">
          <div className="gap-4 w-full h-full text-left flex flex-row">
            <form method="post" className=" w-[60%]">
              <div className=" flex flex-col justify-between gap-4 rounded-lg h-full">
                <div className="bg-gray-100 p-3 h-full rounded-lg">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h1 className="text-2xl font-bold mb-2">
                        Dados do Cliente
                      </h1>
                      <div className="flex flex-wrap justify-between gap-2">
                        <div className="w-[45%]">
                          <label htmlFor="name">Nome Completo:</label>
                          <input
                            type="text"
                            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                            defaultValue={clientData.fullName}
                            onChange={(e) =>
                              setClientData({
                                ...clientData,
                                fullName: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="w-[45%]">
                          <label htmlFor="name">CPF:</label>
                          <input
                            type="text"
                            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                            value={clientData.cpf}
                            onChange={(e) =>
                              setClientData({
                                ...clientData,
                                cpf: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="w-[45%]">
                          <label htmlFor="name">Telefone:</label>
                          <input
                            type="text"
                            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                            value={clientData.tel}
                            onChange={(e) =>
                              setClientData({
                                ...clientData,
                                tel: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="w-[45%]">
                          <label htmlFor="name">Ativo:</label>
                          <select
                            name="viagem"
                            className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                            value={clientData.active}
                            onChange={(e) =>
                              setClientData({
                                ...clientData,
                                active: e.target.value === "true",
                              })
                            }
                          >
                            <option value={true}>Sim</option>
                            <option value={false}>Não</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="h-full mt-4">
                      <h1 className="text-2xl font-bold mb-2">Endereço</h1>
                      <div className="flex flex-col justify-between gap-4">
                        <div className="w-[45%]">
                          <label htmlFor="name">CEP:</label>
                          <input
                            type="text"
                            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                            value={clientData.cep}
                            onChange={(e) =>
                              setClientData({
                                ...clientData,
                                cep: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                          <div className="w-[45%]">
                            <label htmlFor="name">Rua:</label>
                            <input
                              type="text"
                              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                              value={clientData.address}
                              onChange={(e) =>
                                setClientData({
                                  ...clientData,
                                  address: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="w-[45%]">
                            <label htmlFor="name">Bairro:</label>
                            <input
                              type="text"
                              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                              value={clientData.district}
                              onChange={(e) =>
                                setClientData({
                                  ...clientData,
                                  district: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="w-[45%]">
                            <label htmlFor="name">Cidade:</label>
                            <input
                              type="text"
                              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                              value={clientData.city}
                              onChange={(e) =>
                                setClientData({
                                  ...clientData,
                                  city: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="w-[45%]">
                            <label htmlFor="name">Estado:</label>
                            <input
                              type="text"
                              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                              value={clientData.state}
                              onChange={(e) =>
                                setClientData({
                                  ...clientData,
                                  state: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <button
                    type="submit"
                    className="w-[50%] bg-brand-orange rounded-[8px]  h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 flex justify-center items-center cursor-pointer"
                    onClick={handleFormSubmit}
                  >
                    Salvar Dados
                  </button>

                  <Modal type="addPet"></Modal>
                  <Modal type="buyProductsClient"></Modal>

                  {/* <button className=" w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 ">
                    Adicionar Pet
                  </button>  */}
                </div>
              </div>
            </form>
            <div className="bg-gray-100 w-[40%] p-3 rounded-lg">
              <h1 className="text-2xl font-bold">Dados dos Pets</h1>
              <div className="flex flex-col justify-between h-[650px] mt-6">
                <div className="flex flex-col gap-4  h-[537px]">
                  <PetList clientId={id}></PetList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientData;
