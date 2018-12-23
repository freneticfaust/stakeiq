import React, { Component } from "react";
import Decred from "../../assets/decred.png";
import Tezos from "../../assets/tezos.png";
import Cosmos from "../../assets/cosmos.png";
import LivePeer from "../../assets/livepeer.png";
import "./stakepoolmenu.css";

class StakePoolMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }
  render() {
    return (
      <div className="pool-menu">
        <p className="menu-text" onClick={this.showMenu}>
          AVAILABLE ASSETS
        </p>
        {this.state.showMenu ? (
          <div
            className="navbar-menu-dropdown"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <img src={Decred} className="decred-img-dropdown" />
            <p className="pool-button">Decred</p>
            <img src={Tezos} className="tezos-img-dropdown" />
            <p className="pool-button"> Tezos </p>
            <img src={Cosmos} className="cosmos-img-dropdown" />
            <p className="pool-button"> Cosmos </p>
            <img src={LivePeer} className="livepeer-img-dropdown" />
            <p className="pool-button"> LivePeer </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default StakePoolMenu;
