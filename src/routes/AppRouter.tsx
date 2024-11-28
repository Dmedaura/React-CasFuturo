import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<MapasPage />} path="/mapas" />
            <Route element={<PersonajesPage />} path="/personajes" />
            <Route element={<ArmasPage />} path="/armas" />
            <Route element={<DetallesPersonajes />} path="/detallespersonajes" />
          </Routes>
        </main>
        <div className='pt-[38px]'>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default AppRouter