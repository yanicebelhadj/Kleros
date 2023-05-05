import React, { Component } from 'react';

import client from '../../Client'

import Article from "../../components/ArticleActualite/Article"

import "./Actualites.css"

class Actualites extends Component {
    constructor() {
        super()
        this.state = {articlepage: []}
    }
    
    componentDidMount(){
        client.getEntries({
            'content_type' : 'actualites', 
            'order': '-sys.createdAt'
        })
        .then((entries)=> {
            this.setState({articlepage: entries.items }) 
        })
    }

    
    render() {
        console.log(this.state.articlepage)
        return(
            <div className="Actualites">
                <h1>Actualités</h1>
                {
                    this.state.articlepage.length > 0 &&
                    this.state.articlepage.map((article, index) => {
                        return (
                            <Article
                                key={index}
                                id = {article.sys.id}
                                titre = {article.fields.titre}
                                image = {article.fields.imageArticle.fields.file.url}
                                description = {article.fields.texte} 
                            />
                        )
                    })
                }

            </div>
        )
    }
}


export default Actualites;
