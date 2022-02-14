import TitreH1 from "../../TitreH1/TitreH1";
import Bouton from "../Localisation/bouton/bouton";
import Form from "./form/form";

//CREATION PAGE CONTACT

function Contact() {
    return (
        <div className="mise_en_page">
            <TitreH1>Contactez-nous !</TitreH1>
            <h2>Adresse</h2>
            <p>Rue des fleurs</p>
            <p>09100 - Foix</p>
            <h2>Téléphone</h2>
            <p>00 00 00 00 00</p>
            <h2>Vous préfèrez nous écrire ?</h2>
            <Bouton type="primary mt-3">Formulaire de contact</Bouton>
            <Form/>
        </div>
    );
}

export default Contact;