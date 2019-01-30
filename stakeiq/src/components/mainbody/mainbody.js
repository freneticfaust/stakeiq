import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Decred from "../../assets/decred.png";
import DecredPage from "../decredpage/decredpage";
import Cosmos from "../../assets/cosmos.png";
import Tezos from "../../assets/tezos.png";
import LivePeer from "../../assets/livepeer.png";
import "./mainbody.css";

class MainBody extends Component {
  render() {
    return (
      <Router>
        <div className="mainbody">
          <h1 className="cta-mainbody">Compound Your Digital Assets</h1>
          <h2 className="sub-cta-mainbody">
            Decentralized Finance Is Here. Earn On Your Digital Assets.
          </h2>
          <h3 className="sub-cta-compare-mainbody">
            Quickly compare validators for your favorite assets.
          </h3>
          <div className="pool-cards">
            <Link
              to="/decred"
              className="decred-link-mainbody"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="pool-card">
                <img src={Decred} className="decred-img" />
                <h4 className="pool-card-text-decred">Decred</h4>
              </div>
            </Link>
            <Link
              to="/tezos"
              className="tezos-link-mainbody"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="pool-card">
                <img src={Tezos} className="tezos-img" />
                <h4 className="pool-card-text-tezos">Tezos</h4>
              </div>
            </Link>
            <Link
              to="/cosmos"
              className="cosmos-link-mainbody"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="pool-card">
                <img src={Cosmos} className="cosmos-img" />
                <h4 className="pool-card-text-cosmos">Cosmos</h4>
              </div>
            </Link>
            <Link
              to="/livepeer"
              className="liverpeer-link-mainbody"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="pool-card-livepeer">
                <img src={LivePeer} className="livepeer-img" />
                <h4 className="pool-card-text-livepeer">LivePeer</h4>
              </div>
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainBody;
