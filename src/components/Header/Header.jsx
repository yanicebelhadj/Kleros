import { Link } from "react-router-dom"

import Logo from "../../medias/Logo.svg"
import Telephone from "../../icons/telephone.svg"

import "./Header.css"

function Header() {
    return(
        <div className="Header">
            <nav>
                <Link to="/"><img src={Logo} alt="logo" /></Link>
                <ul>
                    <li><Link to="/" className="p-s-semi-bold">Accueil</Link></li>
                    <li><Link to="/IdentiteValeurs" className="p-s-semi-bold">Identité et valeurs</Link></li>
                    <li><Link to="/SavoirFaire" className="p-s-semi-bold">Savoir-faire</Link></li>
                    <li><Link to="/Publications" className="p-s-semi-bold">Publications</Link></li>
                    <li><Link to="/Actualites" className="p-s-semi-bold">Actualités</Link></li>
                    <li><Link to="/Contact" className="p-s-semi-bold">Contact</Link></li>
                </ul>
            </nav>
            <div className="telephone">
                <img src={Telephone} alt="telephone" />
                <p className="p-s-semi-bold">07 64 27 53 80</p>
            </div>
        </div>
    )
}

export default Header;