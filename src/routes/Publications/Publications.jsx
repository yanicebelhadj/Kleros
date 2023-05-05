import React, { Component } from 'react';

import client from '../../Client'

import Article from "../../components/ArticlePublication/Article"

import "./Publications.css"

class Publications extends Component {
    constructor() {
        super()
        this.state = {articlepage: []}
    }
    
    componentDidMount(){
        client.getEntries({
            'content_type' : 'publications', 
            'order': '-sys.createdAt'
        })
        .then((entries)=> {
            this.setState({articlepage: entries.items }) 
        })
    }

    render() {
        return(
            <div className="Publications">
                <h1>Publications</h1>
                <div className='publicationList'>
                    {
                        this.state.articlepage.length > 0 &&
                        this.state.articlepage.map((publication, index) => {
                            return (
                                <Article
                                    key={index}
                                    id = {publication.sys.id}
                                    titre = {publication.fields.titre}
                                    image = {publication.fields.imagePublication.fields.file.url}
                                    description = {publication.fields.texte} 
                                />
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}


export default Publications;

