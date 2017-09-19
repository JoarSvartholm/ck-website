import React from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './Header.css'

export class Navbar extends React.Component{
  constructor(){
    super();
    this.handleWindowChange = this.handleWindowChange.bind(this);
    this.state = {
      width: window.innerWidth,
    };
  }
  showSettings (event) {
    event.preventDefault();
  }
  compnentDidMount(){
    this.handleWindowChange();
    window.addEventListener("resize",this.handleWindowChange());
  }
  compnentDidUnMount(){
    window.removeEventListener("resize",this.handleWindowChange());
  }
  handleWindowChange(){
    this.setState({
      width: window.innerWidth,
    });
  }

  render(){
    const isMobile = this.state.width <= 760;
    if (isMobile){
      return(

          <Menu>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="./presentation">Presentation</Link></li>
            <li><Link to="./behandling">Behandling</Link></li>
            <li><Link to="./priser">Priser</Link></li>
            <li><Link to="./kontakt">Bokning/Kontakt</Link></li>
          </Menu>
      )
    }
    else{
      return (
        <nav>
          <ul className="navbar">
            <li><Link to="/" className={"sbtn"}>Hem</Link></li>
            <li><Link to="./presentation">Presentation</Link></li>
            <li><Link to="./behandling">Behandling</Link></li>
            <li><Link to="./priser">Priser</Link></li>
            <li><Link to="./kontakt">Bokning/Kontakt</Link></li>
          </ul>
        </nav>
      )
    }
  }
}
