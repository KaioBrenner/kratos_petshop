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

      <div className="h-[92vh] flex justify-center items-center">
        <div className="max-w-[1032px] w-[1032px] mx-4 bg-white flex flex-row flex-wrap justify-between gap-8">
          {services.map((service, index) => {
            if (index < 4) {
              return (
                <ServiceCard
                  serviceId={service._id}
                  bath={service.bath}
                  shave={service.shave}
                  nails={service.nails}
                  delivery={service.delivery}
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
