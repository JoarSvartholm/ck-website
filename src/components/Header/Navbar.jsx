import React from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends React.Component{
  render(){
    return {
      <nav>
        <ul className="nav navbar-nav">
          <li><Link to="/" className={"sbtn"}>Hem</Link></li>
          <li><Link to="./newEntry">Lägg till nytt test</Link></li>
          <li><Link to="./Analys">Analysera test</Link></li>
        </ul>
      </nav>
    }
  }
}
