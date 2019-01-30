import React, { Component } from "react";
import StakeFlag from "../../assets/stakeiqflag.png";
import "./navbar.css";
import StakePoolMenu from "../stakepoolmenu/stakepoolmenu";

class NavBar extends Component {
  render() {
    return (
      <div className="App-header">
        <p className="header-text">stakeIQ</p>
        <StakePoolMenu />
        <img src={StakeFlag} className="stake-flag" />
      </div>
    );
  }
}

export default NavBar;
