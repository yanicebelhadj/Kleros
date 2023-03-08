import SavoirFaireItem from "../../components/SavoirFaireItem/SavoirFaireItem"

import Consultations from "../../icons/Consultations.svg"
import Prudhommes from "../../icons/Prudhommes.svg"
import SanteSecurite from "../../icons/SanteSecurite.svg"

import droitDuTravail from "../../medias/droitDuTravail.png"
import DroitProtectionSociale from "../../medias/DroitProtectionSociale.png"
import OQTF from "../../medias/OQTF.png"

import "./SavoirFaire.css"

function SavoirFaire() {
    return(
        <div className="SavoirFaire">
            <h1>Savoir-faire</h1>

            <div className="savoirFaireItemContainer column">
                <SavoirFaireItem image={droitDuTravail} title="Le droit du travail" description="Le droit du travail est une discipline complexe qui encadre la vie du contrat de travail et plus largement la relation existant entre le salarié et son employeur ..." />
                <SavoirFaireItem image={DroitProtectionSociale} title="Le droit de la protection sociale" description="Nos avocats accompagnent les salariés et assurés devant les différentes caisses d’assurance maladie ou de coordination pour leurs demande ..." />
                <SavoirFaireItem image={OQTF} title="Le droit des étrangers - OQTF" description="KLEROS accompagne les étrangers demandeurs d’asile dans leurs démarches administratives ainsi que les étrangers en situation irrégulière demandant ..." />
                <SavoirFaireItem image={OQTF} title="Le droit des collectivités territoriales" description="Nos avocats interviennent régulièrement en soutien d’élus en matière de droit des collectivités territoriales, que ce soit en tant que conseil sur ..." />
                <SavoirFaireItem image={OQTF} title="La réparation du préjudice corporel" description="Vous avez été victime d’un accident (de la route, du quotidien, agressions) ? La société d’avocats KLEROS peut vous représenter et vous permettre ..." />
            </div>

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
