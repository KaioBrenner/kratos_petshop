import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div>
      <Header page="services" />

      <div className="h-[92vh] flex justify-center items-center">
        <div className="max-w-[1032px] mx-4 h-[616px] bg-white flex flex-row flex-wrap justify-between gap-8">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
