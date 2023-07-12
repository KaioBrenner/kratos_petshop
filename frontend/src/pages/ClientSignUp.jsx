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

  const [clients, setClients] = useState([]);

  const [fullNameError, setFullNameError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [telError, setTelError] = useState("");
  const [cepError, setCepError] = useState("");

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

    // Validar o campo de nome completo
    if (fullName.length <= 3) {
      setFullNameError("O nome é obrigatório");
    } else {
      setFullNameError("");
    }

    // Validar o campo de CPF
    if (cpf.length !== 11) {
      setCpfError("O CPF deve ter exatamente 11 dígitos");
    } else {
      setCpfError("");
    }

    // Validar o campo de telefone
    if (tel.length !== 11) {
      setTelError("O telefone é obrigatório");
    } else {
      setTelError("");
    }

    // Validar o campo de cep
    if (cep.length !== 8) {
      setCepError("O cep é obrigatório");
    } else {
      setCepError("");
    }

    // if(!(fullName.length <= 3 || cpf.length !== 11 || tel.length !== 11 || cep.length !== 8)){
    //   alert("Cliente cadastrado com sucesso!")
    // }

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

    async function fetchClients() {
      try {
        const response = await axios.get("http://localhost:3000/clients");
        const dataClients = response.data;
        setClients(dataClients);
      } catch (error) {
        console.log(error);
      }
    }

    async function createClient(clientData) {
      try {
        fetchClients();


        const isClientRegistered = clients.some(
          (client) =>
            client.cpf === clientData.cpf || client.tel === clientData.tel
        );

        console.log(!isClientRegistered);

        if (isClientRegistered) {
          alert("Erro ao cadastrar o client! CPF ou Telefone já registrado");
        } else {
          const response = await axios.post(
            "http://localhost:3000/newClient",
            clientData
          );
          if (
            !(
              fullName.length <= 3 ||
              cpf.length !== 11 ||
              tel.length !== 11 ||
              cep.length !== 8
            )
          ) {
            alert("Cliente cadastrado com sucesso!");
            window.location.reload();
          }
          return response.data;
        }
        // Se desejar, pode retornar a resposta do servidor
      } catch (error) {
        console.log(error);
      }
    }

    createClient(clientData);
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
                        defaultValue={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        min="3"
                      />
                      {fullNameError && (
                        <span className="text-red-400 text-sm">
                          {fullNameError}
                        </span>
                      )}
                    </div>
                    <div className="w-[45%]">
                      <label htmlFor="cpf">CPF:</label>
                      <input
                        type="number"
                        className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                        placeholder="Ex: 12345678900"
                        name="cpf"
                        defaultValue={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        min="11"
                        max="11"
                      />
                      {cpfError && (
                        <span className="text-red-400 text-sm">{cpfError}</span>
                      )}
                    </div>
                    <div className="w-[45%]">
                      <label htmlFor="tel">Telefone:</label>
                      <input
                        type="number"
                        className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                        placeholder="Ex: 75981365975"
                        name="tel"
                        defaultValue={tel}
                        onChange={(e) => setTel(e.target.value)}
                      />
                      {telError && (
                        <span className="text-red-400 text-sm">{telError}</span>
                      )}
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
                        defaultValue={cep}
                        onChange={handleCepChange}
                        placeholder="Ex: 91910450"
                        name="cep"
                      />
                      {cepError && (
                        <span className="text-red-400 text-sm">{cepError}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap justify-between gap-4">
                      <div className="w-[45%]">
                        <label htmlFor="street">Rua:</label>
                        <input
                          type="text"
                          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          defaultValue={address}
                          placeholder="Rua Domingos da Silva"
                          name="address"
                        />
                      </div>
                      <div className="w-[45%]">
                        <label htmlFor="district">Bairro:</label>
                        <input
                          type="text"
                          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          defaultValue={district}
                          placeholder="Camaquã"
                          name="district"
                        />
                      </div>
                      <div className="w-[45%]">
                        <label htmlFor="city">Cidade:</label>
                        <input
                          type="text"
                          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          defaultValue={city}
                          placeholder="Porto Alegre"
                          name="city"
                        />
                      </div>
                      <div className="w-[45%]">
                        <label htmlFor="state">Estado:</label>
                        <input
                          type="text"
                          className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          defaultValue={state}
                          placeholder="RS"
                          name="state"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 justify-center mt-8">
                <button
                  type="submit"
                  className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
                  onClick={handleFormSubmit}
                >
                  Cadastrar Cliente
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientSignUp;
