import Article from "../../medias/Article.png"

import "./Article.css"

function SavoirFaire() {
    return(
        <div className="article row align-start">
            <img src={Article} alt="Article" />
            <div className="column description">
                <h2 className="h2-s-semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula id lorem dictum tempor malesuada in leo. </h2>
                <p className="p-m-regular">In nec finibus ante. Vivamus egestas magna quis arcu rhoncus, sed varius est finibus consectetur.In nec finibus ante. Vivamus consectetur. In nec finib...</p>
            </div>
        </div>
    )
}

export default SavoirFaire