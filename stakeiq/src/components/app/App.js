import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import MainBody from "../mainbody/mainbody";
import DecredPage from "../decredpage/decredpage";
import TezosPage from "../tezospage/tezospage";
import CosmosPage from "../cosmospage/cosmospage";
import LivePeerPage from "../livepeerpage/livepeerpage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <MainBody />
          <Switch>
            <Route exact path="/decred" render={() => <DecredPage />} />
            <Route path="/tezos" render={() => <TezosPage />} />
            <Route path="/cosmos" render={() => <CosmosPage />} />
            <Route path="/livepeer" render={() => <LivePeerPage />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
