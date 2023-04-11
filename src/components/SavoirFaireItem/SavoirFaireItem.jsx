import { useState } from "react"
import Arrow from "../../icons/arrowInCircle.svg"
import "./SavoirFaireItem.css"

function SavoirFaireItem(props){
    const [active,setActive] =useState(false)
    return(
        <div>
            <div className="SavoirFaireItem row">
                <div className="savoirFaireImage" style={{backgroundImage: `url(${props.image})`, backgroundPosition: "center center"}}></div>
                <p className="p-l-semi-bold title">{props.title}</p>
                {
                    props.description.length <= 130 ?
                    <p className="p-m-regular description">{props.description}</p>
                    :
                    <p className="p-m-regular description">{props.description.substr(0, 130)} ...</p>                
                }
                <div onClick={() => setActive(true)} className="row enSavoirPlusContainer">
                    <p className="p-l-medium enSavoirPlus">En savoir plus</p>
                    <img src={Arrow} alt="En savoir plus" />
                </div>
            </div>
            {
                active &&
                <div className="modalSavoirFaire">
                    <div>
                        <p>{props.title}</p>
                        <p onClick={() => setActive(false)}>X</p>
                    </div>
                    <p>{props.description}</p>
                </div>
            }
        </div>
    )
}

export default SavoirFaireItem