import React from 'react';

export class Presentation extends React.Component{
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
      var img = <img src={require('./Home/hem-bild1.png')} alt={'hej'} width={50} />
    }
    else{
     img = <img src={require('./Home/hem-bild1.png')} alt={'hej'} width={500} />
    }
    return(
      <div className="container">
        <div className="left">
          {img}
        </div>
        <div className="right">
          <h1>Presentation</h1>
          <p>C.K Fysio vänder sig till motionären och elitidrottaren som behöver professionell hjälp med idrottsskador och störningar i rörelseapparaten.  Till oss kan du komma privat eller via försäkringsbolag. Kliniken ligger i Sports Gym´s lokaler i Åre.  Vi har vidareutbildning inom idrottsmedicin, rörelseanalyser och träning. Vi använder behandlingsmetoder som  grundar sig i den senaste forskningen och målet är att snabbt få dig tillbaka till aktivitet och/eller träning.
          </p>
          <p>På kliniken jobbar Cecilia Kalla. Hon är Leg.sjukgymnast och har drivit kliniken sedan 2016. Cecilia har jobbat som Sjukgymnast och Personlig tränare på IKSU Sportcenter i Umeå, Frisk3 i Norge samt hos Magdalena Moström i Östersund.
          </p>
          <ul>
            <li>Leg. Sjukgymnast: Examen från Umeå Universitet 2011</li>
            <li>Idrottsmedicin: Behandling av idrottsrelaterade skador.</li>
            <li>OMT steg 1 (ortopedisk manuell terapi): Manipulering- och mobiliseringstekniker för att behandla led, muskel eller nerv. </li>
            <li>Akupunktur</li>
            <li>Lic. Peronlig tränare</li>
            <li>Cert. FMS </li>
            <li>Aspera Movment systems</li>
            <li>Kinesiologitejpning och idrottstejpning</li>
            <li>Löpcoach via SISU</li>
            <li>Diverse utbildningar inom styrketräning samt gruppträning. </li>
          </ul>
        </div>
      </div>
    )
  }
}
