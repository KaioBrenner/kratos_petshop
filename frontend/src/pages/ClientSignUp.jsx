import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const ClientSignUp = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [fullName, setFullName] = useState("");
  const [cpf, setCpf] = useState("");
  const [tel, setTel] = useState("");

  const handleCepChange = async (e) => {
    const novoCep = e.target.value;

    if (novoCep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${novoCep}/json/`
        );

        const { logradouro, bairro, localidade, uf } = response.data;

        setAddress(logradouro);
        setDistrict(bairro);
        setCity(localidade);
        setState(uf);
      } catch (error) {
        console.log("Erro ao buscar CEP:", error);
      }
    }

    setCep(novoCep);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const clientData = {
      fullName,
      cpf,
      tel,
      cep,
      address,
      district,
      city,
      state,
    };

    async function createClient(clientData) {
      try {
        const response = await axios.post("http://localhost:3000/newClient", clientData);
        return response.data; // Se desejar, pode retornar a resposta do servidor
      } catch (error) {
        console.log(error);
      }
    }

    createClient(clientData)

    console.log(clientData);
  };

  return (
    <div>
      <Header page="client-signup" />

      <div className="w-full h-[92vh] flex justify-center items-center">
        <div className=" bg-white w-[700px]  text-left rounded-2xl flex flex-col items-center justify-evenly p-4 drop-shadow-xl shadow-neutral-900">
          <h1 className="text-4xl font-bold mb-4">Cadastro do Cliente</h1>
          <form action="" method="post" className="flex flex-col gap-6">
            <div className="bg-gray-100 p-3 h-full rounded-lg">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-2xl font-bold mb-2 text-left">
                    Dados do Cliente
                  </h1>
                  <div className="flex flex-wrap justify-between gap-2">
                    <div className="w-[45%]">
                      <label htmlFor="fullName">Nome Completo:</label>
                      <input
                        type="text"
                        className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                        placeholder="Ex: José Santos"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="w-[45%]">
                      <label htmlFor="cpf">CPF:</label>
                      <input
                        type="number"
                        className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                        placeholder="Ex: 12345678900"
                        name="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                      />
                    </div>
                    <div className="w-[45%]">
                      <label htmlFor="tel">Telefone:</label>
                      <input
                        type="number"
                        className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                        placeholder="Ex: 75981365975"
                        name="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="h-full mt-4">
                  <h1 className="text-2xl font-bold mb-2 text-left">
                    Endereço
                  </h1>
                  <div className="flex flex-col justify-between gap-4">
                    <div className="w-[45%]">
                      <label htmlFor="cep">CEP:</label>
                      <input
                        type="number"
                        className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                        id="cep"
                        value={cep}
                        onChange={handleCepChange}
                        placeholder="Ex: 91910450"
                        name="cep"
                      />
                    </div>
                    <div className="flex flex-wrap justify-between gap-4">
                      <div className="w-[45%]">
                        <label htmlFor="street">Rua:</label>
                        <input
                          type="text"
                          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          value={address}
                          placeholder="Rua Domingos da Silva"
                          name="address"
                        />
                      </div>
                      <div className="w-[45%]">
                        <label htmlFor="district">Bairro:</label>
                        <input
                          type="text"
                          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          value={district}
                          placeholder="Camaquã"
                          name="district"
                        />
                      </div>
                      <div className="w-[45%]">
                        <label htmlFor="city">Cidade:</label>
                        <input
                          type="text"
                          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          value={city}
                          placeholder="Porto Alegre"
                          name="city"
                        />
                      </div>
                      <div className="w-[45%]">
                        <label htmlFor="state">Estado:</label>
                        <input
                          type="text"
                          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          value={state}
                          placeholder="RS"
                          name="state"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 justify-center">
              <button
                type="submit"
                className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
                onClick={handleFormSubmit}
              >
                Cadastrar Cliente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientSignUp;
