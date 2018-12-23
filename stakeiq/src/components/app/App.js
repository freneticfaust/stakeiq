import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import MainBody from "../mainbody/mainbody";
import DecredPage from "../decredpage/decredpage";
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
            {/* <Route path="/tezos" render={() => <Tezos />} />
          <Route path="/cosmos" render={() => <Cosmos />} />
          <Route path="/livepeer" render={() => <LivePeer />} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
