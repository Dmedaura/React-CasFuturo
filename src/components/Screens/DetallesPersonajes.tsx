import React from "react";
import { useLocation } from "react-router-dom";
import { ICarta } from "../../types/ICarta";

const DetallesPersonajes = () => {
  //Nos sirve para obtener los datos que enviamos desde el navigate
  const location = useLocation();

  const data = location.state as ICarta;

  return (
    <div className="pt-[112px]">
      <img src={data.fotoPersonaje} alt="" />
      <h1>{data.nombrePersonaje}</h1>
    </div>
  );
};

export default DetallesPersonajes;
