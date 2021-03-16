import React from "react";
import SearchBar from './SearchBar';
import BotonBarra from './BotonBarra';
import "./../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="header-title">
            <span className="material-icons">graphic_eq</span>
            <h4>MY LOGOTYPE</h4>
          </div>
          <div className="header-options">
            <SearchBar/>
            <BotonBarra btnClass="btnHeader" btnIcon="mail_outline"/>
            <BotonBarra btnClass="btnHeader" btnIcon="chat_bubble_outline"/>
            <BotonBarra btnClass="btnHeader" btnIcon="account_circle"/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
