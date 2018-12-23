import React, { Component } from "react";
import StakeFlag from "../../assets/stakeiqflag.png";
import "./navbar.css";
import StakePoolMenu from "../stakepoolmenu/stakepoolmenu";

class NavBar extends Component {
  render() {
    return (
      <div className="App-header">
        <p className="header-text">stake IQ</p>
        <img src={StakeFlag} className="stake-flag" />
        <StakePoolMenu />
      </div>
    );
  }
}

export default NavBar;
