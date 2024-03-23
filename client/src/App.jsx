import Nav from "../src/Components/Nav.jsx";
import Headline from "./Components/Headline.jsx";
import Footer from "../src/Components/Footer.jsx";
import Home from "../src/Components/Home.jsx";
import DogPage from "./Pages/DogPage.jsx";
import CatPage from "./Pages/CatPage.jsx";
import BirdPage from "./Pages/BirdPage.jsx";
import HamsterPage from "./Pages/HamsterPage.jsx";
import TurtlePage from "./Pages/TurtlePage.jsx";
import SpiderPage from "./Pages/SpiderPage.jsx";
import SnakePage from "./Pages/SnakePage.jsx";
import FishPage from "./Pages/FishPage.jsx";
import RabbitPage from "./Pages/RabbitPage.jsx";
import AntPage from "./Pages/AntPage.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PageNext from "./Components/PageNext.jsx"
import ModalChatbot from "./Modals/modalChatbot.jsx";






function App() {
  return (
    <>
      <BrowserRouter>
      
        <Nav />
        <Headline />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog" element={<DogPage />} />
          <Route path="/cat" element={<CatPage />} />
          <Route path="/bird" element={<BirdPage />} />
          <Route path="/hamster" element={<HamsterPage />} />
          <Route path="/turtle" element={<TurtlePage />} />
          <Route path="/spider" element={<SpiderPage />} />
          <Route path="/snake" element={<SnakePage />} />
          <Route path="/fish" element={<FishPage />} />
          <Route path="/rabbit" element={<RabbitPage />} />
          <Route path="/ant" element={<AntPage />} />
         
        </Routes>
        <PageNext/>
        <ModalChatbot/>
      
        <Footer />
       
      </BrowserRouter>

     
    </>
  );
}

export default App;
