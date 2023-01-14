import React from "react";
import axios from "../utils/axios";
import "../styles/_dashboard.scss";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import TrainingCard from "../components/TrainingCard";

function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [trainingHistory, setTrainingHistory] = useState();
  // This will change. Storing token in local storage for now. Will secure later

  useEffect(() => {
    const fetchDashboard = async () => {
      const isUser = JSON.parse(localStorage.getItem("user"));
      const userInfo = await axios("/exercise/dashboard", {
        headers: {
          Authorization: `Bearer ${isUser.token}`,
        },
      });
      setName(userInfo.data.name);
      setTrainingHistory(userInfo.data.payload);
      setLoading(false);
    };
    fetchDashboard();
  }, []);

  // const remove = () => {
  //   localStorage.clear()
  //   setauthorizedUser(false)
  // }

  return (
    <div className="dashboard">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>{`${name}'s Dashboard`}</h2>
          <TrainingCard workload={trainingHistory} />
          <button>Log out</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
