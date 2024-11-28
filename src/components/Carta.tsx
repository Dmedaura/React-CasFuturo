import React, { FC } from "react";
import { ICarta } from "../types/ICarta";
import { useNavigate } from "react-router-dom";

const Carta: FC<ICarta> = ({
  fotoPersonaje,
  nombrePersonaje,
  fotoRol,
  rol,
  descripcion,
  habilidades
}) => {

  //  Sirve para redirigir
  const navigate = useNavigate();

  const handleNavigate = () => {

    const total: ICarta = {fotoPersonaje, nombrePersonaje, fotoRol, rol, descripcion, habilidades}

    navigate("/detallespersonajes", { state: total });
  };

  return (
    <>
      <div
        className="card bg-blue-300 w-96 shadow-xl "
        onClick={handleNavigate}
      >
        <figure className="px-10 pt-10">
          <img src={fotoPersonaje} alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-red-700">{nombrePersonaje}</h2>
          <h3 className="italic text-blue-900">{rol}</h3>
          <div className="card-actions">
            <img className="w-10" src={fotoRol} alt="" />
          </div>
          <p className="text-black">{descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default Carta;
