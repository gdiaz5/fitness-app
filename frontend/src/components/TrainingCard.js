import React from "react";

function TrainingCard(props) {
  return (
    <div>
      {props.workload.map((info) => (
        <p>{info.createdOn}</p>
      ))}
    </div>
  );
}

export default TrainingCard;
