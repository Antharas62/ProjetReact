import React from "react";
import { NavLink } from "react-router-dom";

//CREATION DU COMPOSANT NAVBAR

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a class="navbar-brand" href="/">Pas-De-Calais MGA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <NavLink to= "/" className="nav-link">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/localisation" className="nav-link">Localisation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>

)

export default navbar;