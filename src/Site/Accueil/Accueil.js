import TitreH1 from "../../TitreH1/TitreH1";
import chateau from "../../Asset/chateau.jpg";

//CREATION PAGE ACCUEIL

function Accueil() {
    return (
        <div className="mise_en_page">
        <TitreH1>Bienvenue sur le site du Pas-De-Calais !</TitreH1>
            <h4>Le site vous aidant  à trouver les établissements public du Pas-De-Calais</h4>
            <img src={chateau} alt="chateau" width="100%"></img>
        </div>
    );
  }
  
  export default Accueil;
  