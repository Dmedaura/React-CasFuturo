import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black p-4 flex items-center justify-between z-50">
      <div className="flex items-center">
        <div className="size-20 flex items-center">
          <Link className="" to={'/'}>
          <img
            src="https://freight.cargo.site/t/original/i/b11488aa921469ab7806d116861357ecd11637d0576b5ac013ca97c3f6207017/VAL.svg"
            alt=""
          /></Link>
        </div>
        <div className="size-16 flex items-center">
          <img
            src="https://logowik.com/content/uploads/images/valorant-black3985.logowik.com.webp"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-around w-1/2">
        <Link className="text-white" to={'/personajes'}>Personajes</Link>
        <Link className="text-white" to={'/mapas'}>Mapas</Link>
        <Link className="text-white" to={'/modalidadesdejuego'}>Modalidades de juego</Link>
        <Link className="text-white" to={'armas'}>Armas</Link>
      </div>
    </nav>
  );
};

export default Navbar;
