import pantheon from "../../medias/pantheon.png"
import arrowInCircle from "../../icons/arrowInCircle.svg"
import arrow from "../../icons/arrow.svg"

import "./HomePage.css"

function HomePage() {
    return(
        <div className="HomePage">
            <div className="text-area">
                <div className="intro">
                    <h1>KLEROS<span>SOCIÉTÉ D’AVOCATS</span></h1>
                    <p>
                        KLEROS est une société d’avocats composée de plusieurs départements 
                        offrant à sa clientèle une expertise dans des domaines variés adaptés 
                        à leurs besoins, qu’il s’agisse de particuliers, ou d’institutionnels.
                    </p>
                </div>
                <div className="rendez-vous">
                    <p>Prendre rendez-vous</p>
                    <img src={arrowInCircle} alt="Button to calendly" />
                </div>
                <div className="raccourcis">
                    <div className="raccourci">
                        <div className="title">
                            <h2>Licenciement</h2>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <p>
                            Défense de vos droits, négociations des indemnités et contestation 
                            des décisions de l'employeur devant les tribunaux.
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="raccourci">
                        <div className="title">
                            <h2>OQTF</h2>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <p>
                            Décision administrative qui peut être contestée avec l'aide d'un 
                            avocat spécialisé en droit des étrangers.
                        </p>
                    </div>
                </div>
            </div>
            <img className="image-area" src={pantheon} alt="Pantheon" />
        </div>
    )
}

export default HomePage;
