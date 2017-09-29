import React from 'react';

export class Head extends React.Component{
  render(){
    return (
      <div className="head">
        <img className="head-logo" src={require('./img/ck-logo.png')} alt={'ck fysio'} height="100%" />
        <a className="fb" href="https://www.facebook.com/cecilia.kalla" target="_blank" rel="noopener noreferrer" >
          <img src={require('./img/fb-logo.png')} alt={'Facebook'} height="100%" />
          </a>
          <a className="ig" href="https://www.instagram.com/ceciliakalla/" target="_blank" rel="noopener noreferrer" >
          <img src={require('./img/ig-logo.png')} alt={'Instagram'} height="100%" />
        </a>
      </div>
    )
  }
}
