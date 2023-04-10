import "./IdentiteValeurs.css"
import Valeurs from "../../medias/Valeurs.png"
import Identite from "../../medias/Identite.png"

import { useState } from "react";

function IdentiteValeurs() {
    const [identiteValeurs, setIdentiteValeurs] = useState("Identite");

    const switchIdentiteValeurs = () => {
        if(identiteValeurs === "Identite"){
            setIdentiteValeurs("Valeurs")
        }else{
            setIdentiteValeurs("Identite")
        }
    }

    return(
        <div className="IdentiteValeurs">
            <div className="row header">
                {    
                    identiteValeurs === "Identite" ?
                    <h1 className="h1-l">Identité</h1>
                    :
                    <h1 className="h1-l">Valeurs</h1>
                }
                <div className="row switch-btn">
                    <p className= {`p-xl-regular ${identiteValeurs === "Identite" ? "active" :""}`}  onClick={() => switchIdentiteValeurs()}>Identité</p>
                    <p className= {`p-xl-regular ${identiteValeurs === "Valeurs" ? "active" :""}`} onClick={() => switchIdentiteValeurs()}>Valeurs</p>
                </div>
            </div>

            {
                identiteValeurs === "Identite" ?
                <div className="row body identite">
                    <img src={Identite} alt="Identite" />
                    <p>
                        KLEROS accompagne les salariés devant le Conseil de prud’hommes dans leurs contestations (licenciements, harcèlement, discrimination, heures supplémentaires, repositionnement, etc), ainsi que les employeurs notamment dans la mise en place des élections professionnelles et le contentieux devant le pôle social du Tribunal judiciaire.
                        <br/>
                        <br/>KLEROS assure la défense des justiciables devant les organismes de la sécurité sociale (CPAM, URSSAF, régimes spéciaux tels que la CCAS de la RATP, CPR de la SNCF), ainsi qu’au contentieux devant le pôle social du tribunal judiciaire. Nos avocats interviennent également en matière de réparation du préjudice corporel.
                        <br/>
                        <br/>KLEROS accompagne également les administrés devant les tribunaux administratifs en matière de contentieux de la fonction publique, mais également les élus, les administrés et les administrations dans de multiples domaines du droit des collectivités territoriales et la fiscalité locale.
                        <br/>
                        <br/>KLEROS assiste très régulièrement des ressortissants étrangers dans leurs demandes administratives d’admission au séjour (AES) ou encore dans la contestation des décisions de refus (arrêtés de reconduite à la frontière, OQTF, refus de regroupement familial, etc).
                    </p>
                </div>
                :
                <div className="column body valeurs">
                    <p>
                        Conscients de la gravité des situations de chacun et de l’importance d’observer les délais procéduraux, nos avocats s’engagent à prendre connaissance de votre affaire et vous fixer rendez-vous dans les meilleurs délais.
                    </p>
                    <div className="row text-area">
                        <p>
                            KLEROS s’engage à traiter chaque affaire dans le respect des règles déontologiques de la profession d’avocat, à savoir notamment la conscience, l’indépendance, la loyauté, et le secret professionnel.
                            <br/>
                            <br/>Une fois examiné, votre dossier fera l’objet d’une réponse sur-mesure qui vous sera transmise.
                        </p>
                        <img src={Valeurs} alt="Valeurs" />
                    </div>
                </div>
            }
        </div>
    )
}

export default IdentiteValeurs;
