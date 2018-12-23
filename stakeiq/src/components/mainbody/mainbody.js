import React, { Component } from "react";
import Decred from "../../assets/decred.png";
import Cosmos from "../../assets/cosmos.png";
import Tezos from "../../assets/tezos.png";
import LivePeer from "../../assets/livepeer.png";
import "./mainbody.css";

class MainBody extends Component {
  render() {
    return (
      <div className="mainbody">
        <h1 className="cta-mainbody">
          We help you stake with the best validators.
        </h1>
        <h2 className="sub-cta-mainbody">
          Know everything about your validators including uptime, fees, and past
          history.
        </h2>
        <h3 className="sub-cta-compare-mainbody">
          Quickly compare validators for your favorite assets.
        </h3>
        <div className="pool-cards">
          <div className="pool-card">
            <img src={Decred} className="decred-img" />
            <h4 className="pool-card-text-decred">Decred</h4>
          </div>
          <div className="pool-card">
            <img src={Tezos} className="tezos-img" />
            <h4 className="pool-card-text-tezos">Tezos</h4>
          </div>
          <div className="pool-card">
            <img src={Cosmos} className="cosmos-img" />
            <h4 className="pool-card-text-cosmos">Cosmos</h4>
          </div>
          <div className="pool-card-livepeer">
            <img src={LivePeer} className="livepeer-img" />
            <h4 className="pool-card-text-livepeer">LivePeer</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
