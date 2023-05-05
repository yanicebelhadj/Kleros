import React, { Component } from 'react';

import client from '../../Client'


import "../Actualites/Actualites.css"

class ArticleActualitePage extends Component {
    constructor() {
        super()
        this.state = {articlepage: []}
    }
    
    componentDidMount(){
      const urlcourante = document.location.href; 
      const idArticle = urlcourante.split('/').splice(-1)[0];
      
      client.getEntries({
          'content_type' : 'publications', 
          'order': '-sys.createdAt',
          'sys.id': `${idArticle}`
      })
      .then((entries)=> {
          this.setState({articlepage: entries.items[0] }) 
      })
    }

    
    render() {
        return(
            <div className="Actualites">
                {
                    this.state.articlepage.fields &&
                    <div className="articlepage">
                      <div className='image-area' style={{backgroundImage: `url(${this.state.articlepage.fields.imagePublication.fields.file.url})`}}></div>
                      <div className='text-area'>
                        <h1>{this.state.articlepage.fields.titre}</h1>
                        <p>{this.state.articlepage.fields.texte}</p>
                        {
                            this.state.articlepage.fields.fichier.fields !== undefined  &&
                            <a href={this.state.articlepage.fields.fichier.fields.file.url} target="_blank" rel="noreferrer">
                                <p className='fileLink'>
                                    Ouvrir l'article complet
                                </p>
                            </a>
                        }
                      </div>
                    </div>
                }
            </div>
        )
    }
}


export default ArticleActualitePage;
