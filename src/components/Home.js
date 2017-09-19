import React from 'react';

export class Home extends React.Component{
  constructor(){
    super();
    this.state={
      width: window.innerWidth,
    }
    this.handleWindowChange = this.handleWindowChange.bind(this);
  }
  compnentWillMount(){
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
    const isMobile = this.state.width <=760;
    if(isMobile){
      return(
        <div className="container">
          <img src={require('./Home/hem-bild1.png')} alt={'hej'} height={50} />
          <p>HEJEH</p>
        </div>
      )
    }
    else{
      return(
        <div className="container">
          <img src={require('./Home/hem-bild1.png')} alt={'hej'} width={500} />
          <p>HEJEH</p>
        </div>
      )
    }
  }
}
