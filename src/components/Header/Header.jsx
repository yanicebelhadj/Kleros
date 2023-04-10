import React, { useState } from 'react';
import { Link } from "react-router-dom"

import Logo from "../../medias/Logo.svg"
import Telephone from "../../icons/telephone.svg"

import "./Header.css"

function Header() {
    const[active, setActive] = useState(false);

    return(
        <div className="Header">
            <nav>
                <Link to="/"><img src={Logo} alt="logo" /></Link>
                <ul className='nav-dektop'>
                    <li><Link to="/" className="p-s-semi-bold">Accueil</Link></li>
                    <li><Link to="/IdentiteValeurs" className="p-s-semi-bold">Identité et valeurs</Link></li>
                    <li><Link to="/SavoirFaire" className="p-s-semi-bold">Savoir-faire</Link></li>
                    <li><Link to="/Publications" className="p-s-semi-bold">Publications</Link></li>
                    <li><Link to="/Actualites" className="p-s-semi-bold">Actualités</Link></li>
                    <li><Link to="/Contact" className="p-s-semi-bold">Contact</Link></li>
                </ul>
            </nav>
            <a href="tel:+33764275380" className="telephone">
                <img src={Telephone} alt="telephone" />
                <p className="p-s-semi-bold">07 64 27 53 80</p>
            </a>


            <button onClick={() => setActive(!active)} className='burger'>
                <div className="containerLines">
                    <div className = {`lineBurger ${active ? "active1":""}`}></div>
                    <div className = {`lineBurger ${active ? "active3":""}`}></div>
                    <div className = {`lineBurger ${active ? "active2":""}`}></div>
                </div>
            </button>

            {
                active &&
                <div className="menuPageActive" >
                    <nav>
                        <ul>
                            <li><Link onClick={() => setActive(!active)} to="/">Accueil</Link></li>
                            <li><Link onClick={() => setActive(!active)} to="/IdentiteValeurs">Identité et valeurs</Link></li>
                            <li><Link onClick={() => setActive(!active)} to="/SavoirFaire">Savoir-faire</Link></li>
                            <li><Link onClick={() => setActive(!active)} to="/Publications">Publications</Link></li>
                            <li><Link onClick={() => setActive(!active)} to="/Actualites">Actualités</Link></li>
                            <li><Link onClick={() => setActive(!active)} to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            }
        </div>
    )
}

export default Header;