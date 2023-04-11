import SavoirFaireItem from "../../components/SavoirFaireItem/SavoirFaireItem"

import Consultations from "../../icons/Consultations.svg"
import Prudhommes from "../../icons/Prudhommes.svg"
import SanteSecurite from "../../icons/SanteSecurite.svg"

import droitDuTravail from "../../medias/droitDuTravail.png"
import DroitProtectionSociale from "../../medias/DroitProtectionSociale.png"
import OQTF from "../../medias/OQTF.png"

import "./SavoirFaire.css"

function SavoirFaire() {

    const tabSavoiFaire = [
        {
            img: droitDuTravail,
            title: "Le droit du travail",
            description: "Le droit du travail est une discipline complexe qui encadre la vie du contrat de travail et plus largement la relation existant entre le salarié et son employeur, ainsi qu’avec les instances représentatives du personnel. Nos avocats assurent la défense des salariés devant le conseil de prud’hommes souhaitant contester leurs licenciements – qu’il s’agisse de ruptures disciplinaires (faute simple, faute grave, lourde), de licenciements pour inaptitude ou encore pour insuffisance professionnelle / de résultats. La société KLEROS a développé une expertise en matière de contentieux des entreprises à statuts (AIR FRANCE, SNCF, RATP, la Poste, etc…). KLEROS accompagne également les syndicats dans leurs actions relevant du contentieux des plans de sauvegarde de l’emploi (PSE), les licenciements collectifs pour motif économique, et les actions en dommages et intérêts pour atteintes aux intérêts de la profession. Nos avocats assistent également les syndicats dans le cadre du contentieux des élections professionnelles devant le pôle social du tribunal judiciaire territorialement compétent."
        },
        {
            img: DroitProtectionSociale,
            title: "Le droit de la protection sociale",
            description: "Nos avocats accompagnent les salariés et assurés devant les différentes caisses d’assurance maladie ou de coordination pour leurs demande de reconnaissance des accidents du travail ou maladie professionnelles, de contestations des taux d’IPP et rentes y afférent, ainsi que pour tout type de contentieux mêlant des considérations de nature médicale. La société d’avocats KLEROS accompagne également les employeur faisant l’objet de procédures URSSAF et OFII pour le délit de travail dissimulé."
            
        },
        {
            img: OQTF,
            title: "Le droit des étrangers - OQTF",
            description: "KLEROS accompagne les étrangers demandeurs d’asile dans leurs démarches administratives ainsi que les étrangers en situation irrégulière demandant leur admission exceptionnelle au séjour, les demandes de regroupement familial. Lorsque l’étrangers fait l’objet d’une mesure d’éloignement (OQTF), nos équipes d’avocats se chargent d’en assurer la contestation devant les tribunaux administratifs." 
        },
        {
            img: OQTF,
            title: "Le droit des collectivités territoriales",
            description: "Nos avocats interviennent régulièrement en soutien d’élus en matière de droit des collectivités territoriales, que ce soit en tant que conseil sur des opérations de contractualisation des politiques publiques (création de SEMOP, SPLA, SEM, etc), ou en contentieux des marchés publics (passation, exécution)."
        },
        {
            img: OQTF,
            title: "La réparation du préjudice corporel",
            description: "Vous avez été victime d’un accident (de la route, du quotidien, agressions) ? la société d’avocats KLEROS peut vous représenter et vous permettre d’obtenir une indemnisation conforme aux barèmes des différents postes de préjudices prévus à la nomenclature DINTILHAC."
        }
    ]
    return(
        <div className="SavoirFaire">
            <h1>Savoir-faire</h1>

            <div className="savoirFaireItemContainer column">
                {
                    tabSavoiFaire.map(item => {
                        return(
                            <SavoirFaireItem 
                                image={item.img} 
                                title= {item.title}
                                description= {item.description}
                            />
                        )
                    })
                }
            </div>

            <div className="row resume">
                <p className="p-xl-bold">Le droit au service de <span>l’humain</span>.</p>
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
