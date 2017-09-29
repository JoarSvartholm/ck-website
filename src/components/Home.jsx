import React from 'react';

import './Content.css';

export class Home extends React.Component{

  render(){
    var content = <div>

    </div>

    return(
      <div className="container">
        <div className="cont-dev">

          <img src={require('./Home/hem-bild1.png')} alt={'hej'} width="100%" />
            {content}
        </div>
        <div className="cont-web">
          <div className="left">
            <img src={require('./Home/hem-bild1.png')} alt={'hej'} max-width="40%" />
        </div>
          <div className="right">
              {content}
          </div>
        </div>
      </div>
      )
  }
}
