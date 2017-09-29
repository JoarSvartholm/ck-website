import React from 'react';
import {Link} from 'react-router-dom';


export class Head extends React.Component{
  render(){
    return (
      <div className="head">
        <img className="head-logo" src={require('./img/ck-logo.png')} alt={'ck fysio'} height="100%" />
        <Link className="fb" to="https://www.facebook.com/cecilia.kalla">
          <img src={require('./img/fb-logo.png')} alt={'Facebook'} height="100%" />
        </Link>
        <Link className="ig" to="https://www.instagram.com/ceciliakalla/">
          <img src={require('./img/ig-logo.png')} alt={'Instagram'} height="100%" />
        </Link>
      </div>
    )
  }
}
