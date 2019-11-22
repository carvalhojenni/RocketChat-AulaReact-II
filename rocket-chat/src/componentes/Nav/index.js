import React from 'react';
import Logo from '../../imagens/RocketChat.png'
import Menu from './Menu'

import './style.css'

function Nav(){
    return(
        <nav className='navbar'>
            <img src={Logo} alt='Logotipo do RockeChat' className='navbar-logo'/>
            <Menu />
        </nav>
    )
}


export default Nav;