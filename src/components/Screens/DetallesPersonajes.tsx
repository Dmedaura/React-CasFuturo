import React from "react";
import { useLocation } from "react-router-dom";
import { ICarta } from "../../types/ICarta";

const DetallesPersonajes = () => {
  //Nos sirve para obtener los datos que enviamos desde el navigate
  const location = useLocation();

  const data = location.state as ICarta;

  return (

    <div className="hero bg-base-500 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse h-full">
    <img
      src={data.fotoPersonaje}
      className="" />
    <div>
      <h1 className="text-5xl font-bold">{data.nombrePersonaje}</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  </div>
</div>
  );
};

export default DetallesPersonajes;
