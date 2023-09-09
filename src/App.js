// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CarouselMain from "./components/CarouselMain";
import Feed from "./components/Feed";
import Event from './components/Event';
import Eventpage from './components/Eventpage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import sliderData from './components/SliderData';
import Sliders from'./components/Slider';
import Heading from './components/Heading';
import Video from './components/Video';
import VisionC from './components/Vision';
import Teams from './components/Teams';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route exact path="/" element={
          <>
            <Video/>
            <VisionC/>
            <Event/>
            <CarouselMain />
             <Heading/>
            <Sliders sliderData={sliderData} />
          </>
        } />
        <Route exact path="/feed" element={<Feed/>} />
        <Route exact path="/events" element={<Eventpage/>} />
        <Route exact path="/teams" element={<Teams/>} />
    </Routes> 
    <Footer/>
    </>
  );
}

export default App;
