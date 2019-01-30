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
        <button className="menu-button" onClick={this.showMenu}>
          Get Started
        </button>
        {this.state.showMenu ? (
          <div
            className="navbar-menu-dropdown"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            {/* <img src={Decred} className="decred-img-dropdown" /> */}
            <button className="drop-option-button">About</button>
            {/* <img src={Tezos} className="tezos-img-dropdown" /> */}
            <button className="drop-option-button">Yields</button>
            {/* <img src={Cosmos} className="cosmos-img-dropdown" /> */}
            <button className="drop-option-button">Technology</button>
            {/* <img src={LivePeer} className="livepeer-img-dropdown" /> */}
            <button className="drop-option-button">Connect</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default StakePoolMenu;
