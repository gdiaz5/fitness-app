import React from "react";
import shortDate from "../utils/date";
import "../styles/_history.scss";

function TrainingCard(props) {
  return (
    <div className="history space">
      <div className="history-title">
        <h3>Training History</h3>
      </div>
      <div className="history-record">
        {props.workload.map((info) => (
          <div className="history-record-workout">
            <div>
              <p>{shortDate(info.createdOn)}</p>
              <p>{info.workload[0].movement}</p>
            </div>
            <div>
              <p>RESISTANCE</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainingCard;
