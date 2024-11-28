import React from 'react'
import { ICardMapas } from '../../types/ICardMapas'
import CardMapas from '../CardMapas'


const MapasPage = () => {


    const mapas: ICardMapas[] = [
        {
            nombreMapa: "SUNSET",
            descripcionMapa: "Un desastre en una instalación local de Kingdom amenaza con sepultar el vecindario completo. Visita tu camión de comida favorito y luego lleva la pelea a la ciudad en este mapa tradicional de tres carriles.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/30e8b826a64dec85d5f57756e6f415b2b62d3a4d-2000x2000.jpg?auto=format&fit=fill&q=80&w=1504"
        },
        {
            nombreMapa: "LOTUS",
            descripcionMapa: "Una misteriosa estructura cuyos muros resguardan un conducto astral irradia poder ancestral. Inmensas y monolíticas puertas brindan una variedad de oportunidades de movimiento y abren el camino a tres misteriosos sitios.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/184522bbaddef735787cc3a374663aa2ac18397f-395x393.webp?auto=format&fit=fill&q=80&w=395"
        },
        {
            nombreMapa: "PEARL",
            descripcionMapa: "Los atacantes avanzan hacia los defensores en este mapa de dos sitios, ambientado en una ciudad submarina. Pearl es un mapa enfocado en el entorno, sin mecánicas. Lleva la batalla hacia un Mid compacto o a zonas más extendidas en nuestro primer mapa en la Tierra Omega.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/be184dc3571a4c3efb44701fee72e1149021c591-515x515.webp?auto=format&fit=fill&q=80&w=515"
        },
        {
            nombreMapa: "FRACTURE",
            descripcionMapa: "Un centro de investigación ultrasecreto dividido por un experimento fallido de radianita. Con opciones de defensa tan divididas como el mismo mapa, la elección es tuya: enfrentar a los atacantes en su propio territorio o cerrar las escotillas y resistir el asalto.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d7916de5399e878e06bc20bb4a36f5b8a8637050-515x515.webp?auto=format&fit=fill&q=80&w=515"
        },
        {
            nombreMapa: "BREEZE",
            descripcionMapa: "Disfruta de la vista de ruinas históricas o cuevas junto al mar en este paraíso tropical. Pero trae algo con que cubrirte del sol... y de los disparos a larga distancia. Lo necesitarás en estos grandes espacios abiertos. Cuida los flancos y siente la brisa.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e6e2959c79eb2754219fa250248d78acc5e218c3-515x515.webp?auto=format&fit=fill&q=80&w=515"
        },
        {
            nombreMapa: "ICEBOX",
            descripcionMapa: "Tu próximo campo de batalla es un sitio de excavación secreto de Kingdom en algún lugar del ártico. Los dos sitios para plantar están protegidos tanto por nieve como por metal, y no es fácil acceder a ellos de forma horizontal. Aprovecha las tirolesas y nunca te verán venir.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/421063d481e9e1b2b5f2f834f53b7512f77413b9-2000x2000.jpg?auto=format&fit=fill&q=80&w=1504"
        },
        {
            nombreMapa: "BIND",
            descripcionMapa: "Dos sitios. No existe un centro. Debes elegir derecha o izquierda. ¿Cuál será tu elección? Ambos ofrecen caminos directos para los atacantes y un par de teletransportadores unidireccionales facilitan el flanqueo.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9c2f75aa4d00022c440615ce08988c7dd5f2bb00-641x641.png?auto=format&fit=fill&q=80&w=641"
        },
        {
            nombreMapa: "HAVEN",
            descripcionMapa: "Bajo un monasterio olvidado, emerge un clamor entre los agentes rivales que se enfrentan para controlar tres sitios. Hay más territorio por controlar, pero los defensores pueden usar el terreno adicional para realizar ataques agresivos.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d9f3c040be38a8fc1f49f18d1221680419877c05-641x641.png?auto=format&fit=fill&q=80&w=641"
        },
        {
            nombreMapa: "SPLIT",
            descripcionMapa: "Si quieres ir lejos, debes subir. Un par de sitios divididos por un centro elevado permite un movimiento rápido por medio de dos ascensores de cuerda. Cada sitio cuenta con una gran torre vital para el control. Recuerda mirar arriba antes de que todo vuele por los aires.",
            fotoMapa: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dc8a607601339a6c79c8d144c93e17915cde8ac9-515x513.jpg?auto=format&fit=fill&q=80&w=515"
        }
    ]
    return (
        <>
      <div className="pt-[150px] flex-grow flex-full justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[38px]">
      {mapas.map((mapa, index) => (
        <CardMapas
          key={index}
          descripcionMapa={mapa.descripcionMapa}
          nombreMapa={mapa.nombreMapa}
          fotoMapa={mapa.fotoMapa}
        />
      ))}
    </div>
  </div>
    </>
    )
}

export default MapasPage