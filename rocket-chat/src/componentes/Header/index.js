import React from 'react';

import './style.css'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className={this.props.class}>
                <h1>{this.props.title}</h1>
            </section>
        )
    }
}

export default Header