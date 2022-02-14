import { useState, useEffect } from "react";
import useLoadData from "../../Hooks/useLoadData";
import TitreH1 from "../../TitreH1/TitreH1";
import Bouton from "./bouton/bouton";

//CREATION PAGE LOCALISATION

function Localisation() {
    //CREATION DES HOOKS
    const [datas, setDatas] = useLoadData(null);
    const [categorie, setCategorie] = useState("mairie");


    //RECUPERATION DES DONNEES
    useEffect(() => {
        setDatas(`https://etablissements-publics.api.gouv.fr/v3/departements/62/${categorie}`);
    }, [categorie])

    //APPEL DES COMPOSANTS
    return (
        <>
            <div className="mise_en_page">
                <TitreH1>Recherche un établissement :</TitreH1>
                <Bouton type="secondary" clic={() => setCategorie("mairie")}>Mairie</Bouton>
                <Bouton type="secondary" clic={() => setCategorie("commissariat_police")}>Commissariat de police</Bouton>
                <Bouton type="secondary" clic={() => setCategorie("pole_emploi")}>Pole Emploi</Bouton>
                <Bouton type="secondary" clic={() => setCategorie("prefecture")}>Prefecture</Bouton>
                <h2 className="text-success mb-3">Liste des {categorie}</h2>


                {/* TRAITEMENT DES DONNES DU AXIOS */}
                <div className="container-fluid p-4">
                    <div className="row gx-5 justify-content-center">
                        {
                            datas && datas.map(data => {
                                return (
                                    <div className="col-6 p-3">
                                        <div className="card border-secondary">
                                            <div className="card-header">{data.properties.nom}</div>
                                            <div className="card-body">
                                                <h4 className="card-title">Telephone : {data.properties.telephone}</h4>
                                                <h5 className="card-title">Adresse :</h5>
                                                <p className="card-text my-1">{data.properties.adresses[0].lignes}</p>
                                                <p className="card-text my-1">{data.properties.adresses[0].codePostal} - {data.properties.adresses[0].commune}</p>
                                                <div>
                                                    <h5 className="card-title">Horaires :</h5>
                                                    {
                                                        data.properties.horaires && data.properties.horaires.map(horaire => {
                                                            return (
                                                                <div>
                                                                    <p className="card-text my-1"><b>Du {horaire.du} au {horaire.au}</b></p>
                                                                    {horaire.heures.map(heure => {
                                                                        return (
                                                                            <p className="card-text my-1">De {heure.de} à {heure.a}</p>
                                                                        );
                                                                    })

                                                                    }
                                                                </div>
                                                            );
                                                        })
                                                    }


                                                </div>
                                                <a href={data.properties.url} ><button className="btn btn-primary my-3">Visiter le site web</button></a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>

            </div>
        </>
    );
}

export default Localisation;