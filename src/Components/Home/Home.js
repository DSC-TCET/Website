import React from "react";
import Aboutus from "./Aboutus";
import Abouttcet from "./Abouttcet";
import UpcomingEvent from "./UpcomingEvent";
import Discord from "./Discord";
import Stats from "./Stats";
import "./home.css";

function Home() {
  return (
    <div>
      <Aboutus />
      <Abouttcet />
      <Stats/>
      <UpcomingEvent/>
      <Discord />
    </div>
  );
}

export default Home;
