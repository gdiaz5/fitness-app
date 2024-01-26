import React from "react";
import "../styles/_maincard.scss";
import shortDate from "../utils/date";

function MainCard() {
  const date = new Date();

  return (
    <div className="maincard space">
      <div className="maincard-header">
        <p>Welcome back!</p>
        <div>{shortDate()}</div>
      </div>
      <div className="maincard-addbtn">
        <a href="#">
          <span>start new workout +</span>
        </a>
      </div>
    </div>
  );
}

export default MainCard;
