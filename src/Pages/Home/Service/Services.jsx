/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch('https://car-doctor-server-side-beta.vercel.app/services')
         .then(res => res.json())
         .then(data => setServices(data))
   }, [])
   return (
      <div>
         <div className="text-center space-y-5 pb-10">
            <h4 className="text-2xl text-red-500 font-extrabold">Service</h4>
            <h1 className="text-4xl text-black font-extrabold">Our Service Area</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
               services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
         </div>
      </div>
   );
};

export default Services;