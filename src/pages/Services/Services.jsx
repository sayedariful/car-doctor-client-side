// import { useEffect } from "react";
// import { useState } from "react";
import UseServices from "../../Hooks/UseServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = UseServices();
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("https://car-doctor-server-side-iota.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div className="mt-7">
      <div className="text-center space-y-5">
        <h2 className="text-xl text-[#FF3811]">Services</h2>
        <h2 className="text-5xl text-black font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
