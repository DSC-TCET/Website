import React from "react";
import Aboutus from "./Aboutus";
import Abouttcet from "./Abouttcet";
import UpcomingEvent from "./UpcomingEvent";
import Discord from "./Discord";
import Stats from "./Stats";
import Sponsor from "./Sponsor";
import "./home.css";

function Home() {
  return (
    <div>
      <Aboutus />
      <div data-aos="fade-left">
        <Abouttcet />
      </div>
      <Stats />
      <div data-aos="zoom-out">
      <UpcomingEvent />
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
       <Sponsor />
</div>
      
      <Discord />
    </div>
  );
}

export default Home;
