import { Link } from "react-router-dom"
import pantheon from "../../medias/pantheon.png"
// import arrowInCircle from "../../icons/arrowInCircle.svg"
import arrow from "../../icons/arrow.svg"

import "./HomePage.css"

function HomePage() {
    return(
        <div className="HomePage">
            <div className="text-area">
                <div className="intro">
                    <h1>KLEROS<span>SOCIÉTÉ D’AVOCATS</span></h1>
                    <img className="image-area mobile-image" src={pantheon} alt="Pantheon" />

                    <p>
                        KLEROS est une société d’avocats composée de plusieurs départements 
                        offrant à sa clientèle une expertise dans des domaines variés adaptés 
                        à leurs besoins, qu’il s’agisse de particuliers, ou d’institutionnels.
                    </p>
                </div>

                {/* 
                <div className="rendez-vous">
                    <p>Prendre rendez-vous</p>
                    <img src={arrowInCircle} alt="Button to calendly" />
                </div> 
                */}
                
                <div className="raccourcis">
                    <Link to="/SavoirFaire" className="raccourci">
                        <div className="title">
                            <h2>Licenciement</h2>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <p className="p-m-regular">
                            Défense de vos droits, négociations des indemnités et contestation 
                            des décisions de l'employeur devant les tribunaux.
                        </p>
                    </Link>
                    <div className="line"></div>
                    <Link to="/SavoirFaire" className="raccourci">
                        <div className="title">
                            <h2>OQTF</h2>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <p className="p-m-regular">
                            Décision administrative qui peut être contestée avec l'aide d'un 
                            avocat spécialisé en droit des étrangers.
                        </p>
                    </Link>
                </div>
            </div>
            <img className="image-area desktop-image" src={pantheon} alt="Pantheon" />
        </div>
    )
}

export default HomePage;
