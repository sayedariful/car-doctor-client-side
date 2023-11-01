import { useEffect, useState } from "react";

const UseServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-side-iota.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return services;
};

export default UseServices;
