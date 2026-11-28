
import React from "react";
import API from "../components/api.js";

function Dashboard() {

  const checkpoint = async () => {
    const response = await API.get("/api/get");
    console.log("API Response:", response.data);
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={checkpoint}>
        Check API
      </button>
    </div>
  );
}

export default Dashboard;
