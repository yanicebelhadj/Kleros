import "./Article.css"

function Article(props) {
    return(
        <a href = {`/Actualites/${props.id}`} className="article row align-start">
            <img src={props.image} alt="Article" />
            <div className="column description">
                <h2 className="h2-s-semi-bold">{props.titre}</h2>
                <p className="p-m-regular">{props.description.substr(0, 128)}...</p>
            </div>
        </a>
    )
}

export default Article