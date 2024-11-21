import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pagina1 from '../components/Screens/Pagina1'
import Pagina2 from '../components/Screens/Pagina2'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route element={<Pagina1 />} path='/' />
        <Route element={<Pagina2 />} path='/mapas' />
        <Route element={<Pagina2 />} path='/modalidadesdejuego' />
        <Route element={<Pagina2 />} path='/armas' />
    </Routes>

    </>
  )
}

export default AppRouter