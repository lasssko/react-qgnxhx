import React from 'react';
import Navigation from '../components/Navigation';
import CalcH from "../components/CalcH"

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <h1> Accueil </h1>
      <br/>
      <CalcH />
    </div>
  );
};

export default Home;
