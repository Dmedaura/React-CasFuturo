import { ChangeEvent, Component, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
