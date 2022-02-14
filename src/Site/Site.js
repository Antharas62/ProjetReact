import Accueil from "./Accueil/Accueil";
import Localisation from "./Localisation/Localisation";
import Contact from "./Contact/Contact";
import classes from "./Site.css";
import Navbar from "../Navbar/NavBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//GESTION DE LA NAVIGUATION

function Site() {

    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/localisation" element={<Localisation/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default Site;
  