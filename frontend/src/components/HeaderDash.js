import React from "react";
import "../styles/_headerdash.scss";
import clearLocalStorage from "../utils/localStorageController";
import { FaHandshake } from "react-icons/fa";

function HeaderDash({ logout }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    clearLocalStorage();
    logout(false);
  };

  return (
    <div className="headerdash">
      <div className="headerdash-name space">SWOLE BUDDY</div>
      <div className="header-logout">
        <button onClick={handleSubmit}>Logout</button>
      </div>
    </div>
  );
}

export default HeaderDash;
