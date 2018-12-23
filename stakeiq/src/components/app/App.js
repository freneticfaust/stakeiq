import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import MainBody from "../mainbody/mainbody";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainBody />
        {/* <Switch>
          <Route path="/decred" render={() => <Decred />} />
          <Route path="/tezos" render={() => <Tezos />} />
          <Route path="/cosmos" render={() => <Cosmos />} />
          <Route path="/livepeer" render={() => <LivePeer />} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
