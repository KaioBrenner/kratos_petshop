import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get("http://localhost:3000/services");
        const dataServices = response.data;
        setServices(dataServices);
      } catch (error) {
        console.log(error);
      }
    }

    fetchServices();
  }, []);

  return (
    <div>
      <Header page="services" />

      <div className="h-[92vh] flex flex-col justify-center items-center">

        <div className="justify-start container">
          <h1 className="text-left text-3xl">Quantidade de Serviços: {services.length}</h1>
        </div>
        <div className="max-w-[1032px] w-[1032px] h-[752px] mx-4 mt-8 flex flex-row items-center gap-8">
          {services.map((service, index) => {
            if (index < 4) {
              return (
                <ServiceCard
                  serviceId={service._id}
                  bath={service.bath}
                  shave={service.shave}
                  nails={service.nails}
                  delivery={service.delivery}
                  comments={service.comments}
                  petId={service.pet}
                  ownerId={service.owner}
                  index={index}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
