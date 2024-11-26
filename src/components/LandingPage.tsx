import React from "react";
import Card from "./Card";
import { ICard } from "../types/ICard";

const LandingPage = () => {

const cuadros: ICard[] = [
{titulo:"Personajes",descripcion:"Tambien llamados agentes, se dividen en cuatro roles:",elementos:["Duelistas", "Controladores", "Centinelas", "Iniciadores"]}, 
{titulo:"Mapas",descripcion:"17 Mapas hasta el momento:",elementos:["11 Para la modalidad clásica/normal (Unranked) de los cuales en la modalidad competitiva solo entran 7 en la rotación.","Los 5 mapas restante pertenecen a la modalidad de TeamDeadmach."]},
{titulo:"Modalidades de juego",descripcion:"Hay varias modalidades",elementos:["Normal o Unranked","Competitivo o Rankeds","Swiftplay","Spikerush","Deathmatch","Carrera de Armas","Deathmatch por equipos","Personalizadas"]},
{titulo:"Armamento y utilidades",descripcion:"Existen armas y escudos para cada ronda y habilidades de personajes:",elementos:["Hay 18 armas y dos tipos de escudos o armaduras", "Las habilidades o utilidades de los agentes tienen distintascargas y precios"]},

]

  return (
    <div className="h-screen pt-[25px] flex bg-slate-600 text-black">
    {cuadros.map((cuadro)=>(
<Card
titulo={cuadro.titulo}
descripcion={cuadro.descripcion}
elementos={cuadro.elementos}
/>
    ))}
    </div>
  );
};

export default LandingPage;
