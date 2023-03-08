import SavoirFaireItem from "../../components/SavoirFaireItem/SavoirFaireItem"
import Consultations from "../../icons/Consultations.svg"
import Prudhommes from "../../icons/Prudhommes.svg"
import SanteSecurite from "../../icons/SanteSecurite.svg"
import droitDuTravail from "../../medias/droitDuTravail.png"

import "./SavoirFaire.css"

function SavoirFaire() {
    return(
        <div className="SavoirFaire">
            <h1>Savoir-faire</h1>
            <SavoirFaireItem image={droitDuTravail} title="Le droit du travail" description="Le droit du travail est une discipline complexe qui encadre la vie du contrat de travail et plus largement la relation existant entre le salarié et son employeur ..." />
            <div className="row resume">
                <p className="p-xl-bold">Le droit au service de <span>l’humain.</span></p>
                <div className="column arguments">
                    <div className="row">
                        <img src={Consultations} alt="Consultations" />
                        <div className="column">
                            <p className="p-xl-semi-bold">Consultations</p>
                            <p className="p-m-regular description">Vous souhaitez des conseils, faire valoir vos droits ou quitter votre société.</p>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="row">
                        <img src={Prudhommes} alt="Prudhommes" />
                        <div className="column">
                            <p className="p-xl-semi-bold">Prud'hommes</p>
                            <p className="p-m-regular description">Vous avez été licencié et vous souhaitez faire valoir vos droits.</p>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="row">
                        <img src={SanteSecurite} alt="SanteSecurite" />
                        <div className="column">
                            <p className="p-xl-semi-bold">Santé / Sécurité</p>
                            <p className="p-m-regular description">Sécurité au travail / Harcèlement / Discrimination / Maladie professionnelle / Accident du travail / Travailleur handicapé.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavoirFaire;
