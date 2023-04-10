import Map from "../../medias/map.png"

// import arrowInCircle from "../../icons/arrowInCircle.svg"

import "./Contact.css"

function Contact() {
    return(
        <div className="Contact">
            <h1>Contacts</h1>
            <div className="map">
                <img src= {Map} alt="Map" />    
            </div>
            <div className="text-area row align-start">
                <div className="descriptions column">
                    <div className="description">
                        <p className="title p-xl-medium">Adresse</p>
                        <p className="p-m-regular">
                            7, rue Saint Germain
                            <br/>78260 Achères
                        </p>
                    </div>
                    <div className="description">
                        <p className="title p-xl-medium">Demande d’informations</p>
                        <p className="p-m-regular">mergui.avocat@gmail.com</p>
                    </div>
                    <div className="description">
                        <p className="title p-xl-medium">Téléphone</p>
                        <p className="p-m-regular">07 64 27 53 80</p>
                    </div>
                </div>
                {/* 
                <div className="row rendez-vous">
                    <p>Prendre rendez-vous</p>
                    <img src={arrowInCircle} alt="Button to calendly" />
                </div> 
                */}
                <div className="slogan">
                    <p className="h1-l">Le droit au service de <span>l’humain.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
