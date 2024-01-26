import React from "react";
import axios from "../utils/axios";
import "../styles/_dashboard.scss";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useHistory from "react-router-dom";
import TrainingCard from "../components/TrainingCard";
import HeaderDash from "../components/HeaderDash";
import MainCard from "../components/MainCard";

function Dashboard() {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [trainingHistory, setTrainingHistory] = useState();

  // This will change. Storing token in local storage for now. Will secure later
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const isUser = JSON.parse(localStorage.getItem("user"));
        setToken(isUser.token);
        const userInfo = await axios("/exercise/dashboard", {
          headers: {
            Authorization: `Bearer ${isUser.token}`,
          },
        });
        setLoggedIn(true);
        setName(userInfo.data.name);
        setTrainingHistory(userInfo.data.payload);
      } catch {
        navigate("/");
      }
    };
    //console.log(isLoggedIn);
    fetchDashboard();
  }, [isLoggedIn]);

  return (
    <div className="dashboard">
      {!isLoggedIn ? (
        <h2>hey</h2>
      ) : (
        <div>
          <HeaderDash logout={setLoggedIn} />
          <div>
            <h2>{name.split(" ")[0]}'s Dashboard</h2>
          </div>
          <MainCard />
          <TrainingCard workload={trainingHistory} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
