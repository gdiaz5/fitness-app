import React from "react";

function TrainingCard(props) {
  return (
    <div>
      <div>
        <h3>Jan 1st, 2023</h3>
        <h4>Bench Press</h4>
      </div>
      {props.workload.map((info) => (
        <p>{info.createdOn}</p>
      ))}
    </div>
  );
}

export default TrainingCard;
