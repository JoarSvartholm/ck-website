import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-button';

import './Header.css'

export class Devnav extends React.Component{
  constructor(){
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu() {
      let menuState = !this.state.menuActive;
      this.setState({
        menuActive: menuState
      });
    }



  render(){

    let menu;
    if (this.state.menuActive){
      menu = <div>
                <ul>
                  <li>First Item </li>
                  <li>Second Item </li>
                  <li>Third Item </li>
                </ul>
              </div>
    }
    else{ menu = '';}
      return(
        <div>

          <button onClick={this.toggleMenu}>hej</button>

          {menu}

        </div>
      )

  }
}
