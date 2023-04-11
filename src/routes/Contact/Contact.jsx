import Map from "../../medias/map.png"

// import arrowInCircle from "../../icons/arrowInCircle.svg"

import "./Contact.css"

function Contact() {
    return(
        <div className="Contact">
            <h1>Contacts</h1>
            <a className="map" href="https://www.google.com/maps/place/7+Rue+de+Saint-Germain,+78260+Ach%C3%A8res/@48.9599006,2.0674094,17z/data=!3m1!4b1!4m6!3m5!1s0x47e68a37a854c66b:0x649c69e32b8105e0!8m2!3d48.9598971!4d2.0695981!16s%2Fg%2F11c26xxtzt" target="_blank" rel="noopener noreferrer">
                <img src= {Map} alt="Map" />    
            </a>
            <div className="text-area row align-start">
                <div className="descriptions column">
                    <a className="description" href="https://www.google.com/maps/place/7+Rue+de+Saint-Germain,+78260+Ach%C3%A8res/@48.9599006,2.0674094,17z/data=!3m1!4b1!4m6!3m5!1s0x47e68a37a854c66b:0x649c69e32b8105e0!8m2!3d48.9598971!4d2.0695981!16s%2Fg%2F11c26xxtzt" target="_blank" rel="noopener noreferrer">
                        <p className="title p-xl-medium">Adresse</p>
                        <p className="p-m-regular">
                            7, rue Saint Germain
                            <br/>78260 Achères
                        </p>
                    </a>
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
