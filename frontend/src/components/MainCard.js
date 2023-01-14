import React from "react";
import "../styles/_maincard.scss";

function MainCard() {
  function currentDate() {
    let date = new Date();
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "numeric",
      day: "numeric",
    });
  }

  return (
    <div className="maincard space">
      <div className="maincard-header">
        <p>Welcome back!</p>
        <div>{currentDate()}</div>
      </div>
      <div className="maincard-addbtn">
        <span>start new workout +</span>
      </div>
    </div>
  );
}

export default MainCard;
