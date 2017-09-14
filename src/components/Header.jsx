import React from 'react';

import './Header/Header.css'
import {Navbar} from './Header/Navbar'
import {Head} from './Header/Head'

export class Header extends React.Component {
  render(){
    return(
      <div className="header">
          <Head />
          <Navbar />
      </div>
    )
  }
}
