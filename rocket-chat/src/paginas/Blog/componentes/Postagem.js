import React from 'react'
import './style.css'
function Postagem (props) {
    return (
      <div className='postagem'>
          <h2>{props.card.title}</h2>
        <p>{props.card.body}</p>
        <button className="botao"> Saiba mais</button>
      </div>
    )
  }

export default Postagem