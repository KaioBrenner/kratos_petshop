import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
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

      <div className="flex flex-col justify-center items-center  mt-10 sm:px-16 px-6">

        <div className="flex w-full">
        <h1 className="text-5xl relative text-left font-bold mb-4 w-full">
        Atendimentos: {services.length}
          <div className="absolute text-[50px] bottom-0 right-0">
            <Link to="/home">
              <FiArrowLeftCircle></FiArrowLeftCircle>
            </Link>
          </div></h1>
        </div>
        <div className="max-w-[1032px] w-[1032px] mx-4 mt-8 flex flex-row items-center gap-8">
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
