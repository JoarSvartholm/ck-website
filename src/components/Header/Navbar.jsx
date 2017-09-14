import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-button';
import { slide as Menu } from 'react-burger-menu'

import {Devnav} from './Devnav'
import './Header.css'

export class Navbar extends React.Component{
  constructor(){
    super();
    this.state = {
      width: window.innerWidth,
      showMenu: false,
    };
  }
  showSettings (event) {
    event.preventDefault();
  }
  compnentWillMount(){
    window.addEventListener('resize',this.handleWindowChange());
  }
  compnentWillUnMount(){
    window.removeEventListener('resize',this.handleWindowChange());
  }
  handleWindowChange(){
    this.setState({
      width: window.innerWidth,
    });
  }

  openNav() {
    this.setState({showMenu:true});
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    this.setState({showMenu:false});
  }

  render(){
    const isMobile = this.state.width <= 1000;
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
