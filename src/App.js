import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ScrollButton from "./Components/ScrollButton/ScrollButton";

import Home from "./Components/Home/Home";
import Eventgallery from "./Components/Events/Eventgallery";
import Team from "./Components/Team/Team";
function App() {
  return (
    <>
      <ScrollButton />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<Eventgallery />}></Route>
        <Route path="team" element={<Team />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
