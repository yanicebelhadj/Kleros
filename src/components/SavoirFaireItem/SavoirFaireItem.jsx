import Arrow from "../../icons/arrowInCircle.svg"
import "./SavoirFaireItem.css"

function SavoirFaireItem(props){
    return(
        <div className="SavoirFaireItem row">
            <div className="savoirFaireImage" style={{backgroundImage: `url(${props.image})`, backgroundPosition: "center center"}}></div>
            <p className="p-l-semi-bold title">{props.title}</p>
            <p className="p-m-regular description">{props.description}</p>
            <div className="row enSavoirPlusContainer">
                <p className="p-l-medium enSavoirPlus">En savoir plus</p>
                <img src={Arrow} alt="En savoir plus" />
            </div>
        </div>
    )
}

export default SavoirFaireItem