import React from 'react'
import Header from '../../componentes/Header'
import Postagem from './componentes/Postagem'
// import Astro from '../../imagens/astro.jpg'
import { getCard } from '../../service/baseBlog'


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            card: []
        }
    }
    componentDidMount() {
        getCard()
        .then(response => {
            this.setState({
                card:response.data
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        return (
            <section >
                <div className="blog-header">
                <Header title="blog"/>
                </div>
                {this.state.card.length > 0 ?
                    this.state.card.map(card => {
                        return <Postagem card={card} key={card.id} />
                    }) : <span >Carregando Blog</span>
                }
            </section>
        )
    }
}


export default Blog