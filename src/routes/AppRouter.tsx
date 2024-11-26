import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pagina1 from '../components/Screens/PersonajesPage'
import Pagina2 from '../components/Screens/ArmasPage'
import Navbar from '../components/Navbar'
import HomePage from '../components/Screens/HomePage'
import MapasPage from '../components/Screens/MapasPage'
import Footer from '../components/Footer'
import PersonajesPage from '../components/Screens/PersonajesPage'
import ArmasPage from '../components/Screens/ArmasPage'
import DetallesPersonajes from '../components/Screens/DetallesPersonajes'

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<MapasPage />} path='/mapas' />
        <Route element={<PersonajesPage />} path='/personajes' />
        <Route element={<ArmasPage />} path='/armas' />
        <Route element={<DetallesPersonajes />} path ='/detalles'/>
      </Routes>
      <Footer/>

    </>
  )
}

export default AppRouter