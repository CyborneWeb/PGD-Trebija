import React from "react";
import Hero from "../components/HomePage/Hero";
import NotifContainer from "../components/Containers/NotifContainer";
import Donate from "../components/HomePage/Donate";
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
