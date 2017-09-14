import React from 'react';

export class Home extends React.Component{
  render(){
    return(
      <div className="container">
        <img src={require('./Home/hem-bild1.png')} alt={'hej'} height="20%" />
      </div>
    )
  }
}
