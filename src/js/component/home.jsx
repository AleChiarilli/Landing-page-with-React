import React from "react";

//include images into your bundle

import NavBar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="Hero">
      <Jumbotron />
      </div>
      <div className="Cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
	  <Footer/>
    </div>
  );
};

export default Home;
