import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import {useEffect} from 'react';
import Home from "./Components/Home/Home";
import Eventgallery from "./Components/Events/Eventgallery";
import Team from "./Components/Team/Team";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
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
