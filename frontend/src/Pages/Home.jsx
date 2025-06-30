import React from "react";
import Hero from "../components/Hero";
import NotifContainer from "../components/NotifContainer";
import Donate from "../components/Donate";
import WeatherContainer from "../components/Containers/WeatherContainer";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="">
        <WeatherContainer />
        <NotifContainer />
        
      </div>
      <Donate />
    </>
  );
};

export default Home;
