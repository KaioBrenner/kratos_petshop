import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import grooming from "../assets/images/grooming.svg";
import medicalReport from "../assets/images/medical-report.svg";
import petBox from "../assets/images/pet-box.svg";
import petFood from "../assets/images/pet-food.svg";
import petHospital from "../assets/images/pet-hospital.svg";
import petShop from "../assets/images/pet-shop.svg";
import petSoap from "../assets/images/pet-soap.svg";
import Pet from "../assets/images/pet.svg";
import vetApp from "../assets/images/vet-app.svg";
import nailClipper from "../assets/images/nail-clipper.svg";
import petDelivery from "../assets/images/pet-delivery.png";
import axios from "axios";

const AddService = ({ closeModal, petName, petId, ownerId }) => {
  const [serviceData, setServiceData] = useState({
    bath: false,
    shave: false,
    nails: false,
    delivery: false,
    comments: "",
  });

  useEffect(() => {
    if (serviceData.bath) {
      setServices((prevServices) => [
        ...prevServices,
        {
          productName: bath.productName,
          category: bath.category,
          stock: bath.stock,
          price: bath.price,
        },
      ]);
    } else {
      const updatedServices = services.filter(
        (service) => service.productName !== bath.productName
      );
      setServices(updatedServices);
    }

  }, [serviceData.bath]);

  useEffect(() => {
    if (serviceData.shave) {
      setServices((prevServices) => [
        ...prevServices,
        {
          productName: shave.productName,
          category: shave.category,
          stock: shave.stock,
          price: shave.price,
        },
      ]);
    } else {
      const updatedServices = services.filter(
        (service) => service.productName !== shave.productName
      );
      setServices(updatedServices);
    }

  }, [serviceData.shave]);
  
  useEffect(() => {
    if (serviceData.nails) {
      setServices((prevServices) => [
        ...prevServices,
        {
          productName: nails.productName,
          category: nails.category,
          stock: nails.stock,
          price: nails.price,
        },
      ]);
    } else {
      const updatedServices = services.filter(
        (service) => service.productName !== nails.productName
      );
      setServices(updatedServices);
    }

  }, [serviceData.nails]);
  
  useEffect(() => {
    if (serviceData.delivery) {
      setServices((prevServices) => [
        ...prevServices,
        {
          productName: delivery.productName,
          category: delivery.category,
          stock: delivery.stock,
          price: delivery.price,
        },
      ]);
    } else {
      const updatedServices = services.filter(
        (service) => service.productName !== delivery.productName
      );
      setServices(updatedServices);
    }

  }, [serviceData.delivery]);

  const [client, setClient] = useState({});

  const [services, setServices] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [bath, setBath] = useState({});
  const [shave, setShave] = useState({});
  const [nails, setNails] = useState({});
  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    async function fetchServices() {
      try {
        const responseBath = await axios.get(
          "http://localhost:3000/getProduct/648b887f0e816e7192e7b626"
        );
        const dataBath = responseBath.data;
        const responseShave = await axios.get(
          "http://localhost:3000/getProduct/648cf13c1c4321e906806b67"
        );
        const dataShave = responseShave.data;
        const responseNails = await axios.get(
          "http://localhost:3000/getProduct/648cf1521c4321e906806b78"
        );
        const dataNails = responseNails.data;
        const responseDelivery = await axios.get(
          "http://localhost:3000/getProduct/648cf16b1c4321e906806b8b"
        );
        const dataDelivery = responseDelivery.data;

        setBath(dataBath);
        setShave(dataShave);
        setNails(dataNails);
        setDelivery(dataDelivery);
      } catch (error) {
        console.log(error);
      }
    }

    fetchServices();
  }, []);

  useEffect(() => {
    async function fetchClient() {
      try {
        const response = await axios.get(
          `http://localhost:3000/getClient/${ownerId}`
        );
        const dataClient = response.data;
        setClient(dataClient);
        console.log(client);
      } catch (error) {
        console.log(error);
      }
    }

    fetchClient();
  }, []);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setServiceData((prevState) => ({
      ...prevState,
      [id]: checked,
    }));

    console.log(serviceData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    

    function formatarData(data) {
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const ano = data.getFullYear();
      const horas = String(data.getHours()).padStart(2, "0");
      const minutos = String(data.getMinutes()).padStart(2, "0");

      return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
    }


    const countTotalPrice = () => {
      let count = 0;
      for (let i = 0; i < services.length; i++) {
        console.log(services[i].price);
        count += services[i].price;
      }
      return count;
    };

    const saleData = {
      cart: services,
      fullName: client.fullName,
      cpf: client.cpf,
      paymentMethod,
      totalPrice: countTotalPrice(),
      dateTime: formatarData(new Date()),
    };

    console.log(saleData);


    if (
      serviceData.bath === true ||
      serviceData.shave === true ||
      serviceData.nails === true
    ) {
      async function createService(petId, ownerId, serviceData) {
        try {
          const response = await axios.post(
            `http://localhost:3000/newService/${petId}/${ownerId}`,
            serviceData
          );
          console.log(serviceData);
          return response.data; // Se desejar, pode retornar a resposta do servidor
        } catch (error) {
          console.log(error);
        }
      }

      async function createSellHistoric(saleData) {
        try {
          const response = await axios.post(
            "http://localhost:3000/newSellHistoric",
            saleData
          );
          alert("Compra efetuada com sucesso!");
          window.location.reload()
          return response.data;
        } catch (error) {
          // Se desejar, pode retornar a resposta do servidor
          console.log(error);
        }
      }
  
      createSellHistoric(saleData);
      createService(petId, ownerId, serviceData);
      
      alert("Serviço adicionado com sucesso!");
    } else {
      alert("Adicione ao menos um serviço para ser feito.");
    }

    

  };

  return (
    <>
      <form
        className="bg-gray-100 p-3 rounded-lg relative"
        method="post"
        onSubmit={handleSubmit}
      >
        <button
          type="submit"
          className="p-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center absolute right-[70px] top-3"
        >
          <AiOutlineCheck />
        </button>
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl text-left font-bold mb-2 leading-none">
          Adicionar Serviço: {petName}
        </h1>
        <div className="flex flex-col justify-between w-[600px]">
          <div className="flex flex-row justify-between gap-5">
            <label
              htmlFor="bath"
              className="flex items-center cursor-pointer"
              title="Banho"
            >
              <input
                type="checkbox"
                id="bath"
                checked={serviceData.bath}
                onChange={handleCheckboxChange}
              />
              <div className="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={petSoap}
                  alt="Imagem de Banho"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>

            <label
              htmlFor="shave"
              className="flex items-center cursor-pointer"
              title="Tosa"
            >
              <input
                type="checkbox"
                id="shave"
                checked={serviceData.shave}
                onChange={handleCheckboxChange}
              />
              <div className="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={grooming}
                  alt="Imagem de Tosa"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>
            <label
              htmlFor="nails"
              className="flex items-center cursor-pointer"
              title="Cortar Unhas"
            >
              <input
                type="checkbox"
                id="nails"
                checked={serviceData.nails}
                onChange={handleCheckboxChange}
              />
              <div className="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={nailClipper}
                  alt="Imagem de Cortar Unhas"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>
            <label
              htmlFor="delivery"
              className="flex items-center cursor-pointer"
              title="Entrega a domicílio"
            >
              <input
                type="checkbox"
                id="delivery"
                checked={serviceData.delivery}
                onChange={handleCheckboxChange}
              />
              <div className="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={petDelivery}
                  alt="Imagem de Entrega a domicílio"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>

          </div>

          <div className="text-2xl text-left font-bold mb-2 leading-none mt-4">
            <h1>Observações</h1>
            <textarea
              className="mt-4 w-full h-28 border border-neutral-400 font-normal text-base"
              onChange={(e) =>
                setServiceData((prevState) => ({
                  ...prevState,
                  comments: e.target.value,
                }))
              }
            ></textarea>
          </div>

          <div>
            <label htmlFor="name">Forma de Pagamento:</label>
            <select
              name="porte"
              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Pix">Pix</option>
              <option value="Crédito">Crédito</option>
              <option value="Débito">Débito</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddService;
