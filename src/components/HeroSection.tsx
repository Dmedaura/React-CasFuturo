import React from 'react'

const HeroSection = () => {
  return (
    <div
  className="hero min-h-screen bg-fixed"
  style={{
    backgroundImage: "url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/6c8f1dd2aa910398a6140967b0ef88ffc02cca2e-1920x1080.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bienvenidos</h1>
      <p className="mb-5">
        Valorant es un juego FPS (First Person Shoter) donde los roles estan más marcados por los agentes y sus utilidades
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default HeroSection