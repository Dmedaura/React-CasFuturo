import React, { FC } from 'react'
import { ICardMapas } from '../types/ICardMapas'

const CardMapas: FC<ICardMapas> = ({ descripcionMapa, fotoMapa, nombreMapa, carruselMapa, }) => {
    return (
        <div className="flex flex-col lg:flex-row bg-gray-400 shadow-xl rounded-lg overflow-hidden">
            <div className='w-full lg:w-[60%]'>
                <img className='w-full h-full object cover'
                    src={fotoMapa}
                    alt="" />
            </div>
            <div className="flex flex-col justify-center p-2 lg:w-[40%]">
                <h2 className="card-title text-red-500 justify-center">{nombreMapa}</h2>
                <p className='text-black'>{descripcionMapa}</p>
            </div>
        </div>
    )
}

export default CardMapas