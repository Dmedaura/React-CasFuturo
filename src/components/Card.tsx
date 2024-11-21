import React, { FC } from "react";
import { ICard } from "../types/ICard";

const Card: FC<ICard> = ({ descripcion, titulo, elementos }) => {
  return (
    <div className="border rounded h-80 w-1/4 m-2 p-4 bg-gray-500">
      <div className="space-y-4">
        <h1 className="text-center font-bold text-red-700 ">{titulo}</h1>
        <h2 className="text-center italic">{descripcion}</h2>
      </div>

      <div className="space-y-0">
        {elementos.map((elemento) => (
          <li>
            <a>{elemento}</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Card;
