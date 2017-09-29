import React from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './Header.css'

export class Navbar extends React.Component{
  render(){
      return(
        <div>
        <div className="navbar-dev">
          <Menu>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="./presentation">Presentation</Link></li>
            <li><Link to="./behandling">Behandling</Link></li>
            <li><Link to="./priser">Priser</Link></li>
            <li><Link to="./kontakt">Bokning/Kontakt</Link></li>
          </Menu>
        </div>
        <nav className="navbar-web">
          <ul className="navbar">
            <li><Link to="/" className={"sbtn"}>Hem</Link></li>
            <li><Link to="./presentation">Presentation</Link></li>
            <li><Link to="./behandling">Behandling</Link></li>
            <li><Link to="./priser">Priser</Link></li>
            <li><Link to="./kontakt">Bokning/Kontakt</Link></li>
          </ul>
        </nav>
        </div>
      )
  }
}
