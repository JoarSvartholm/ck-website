import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from "./Header";

//components
import {Home} from './Home';

export class Root extends React.Component {
  render(){
    return(
    <div className="body">
      <Header />
      <hr />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/presentation" component={Home} />
        <Route path="/behandling" component={Home} />
        <Route path="/priser" component={Home} />
        <Route path="/kontakt" component={Home} />
      </div>
    </div>
  )
  }
}
