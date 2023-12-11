import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navi=useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if(token){
      axios.get(`http://localhost:5000/api/dashboard`, {
        headers: { "Authorization":`Bearer ${token }`}
      })
      .then((res) => {
        console.log(res.data);
      
      })
      .catch((err) => {
        console.log(err);
      });}
      else{
        navi("/login")
      }
  },[token,navi]);
  
  const handleClick=()=>{
    localStorage.removeItem('token');
    navi('/login')
  }
  return (
    <div>
      <h5 style={dashboardStyle}>Hey !!!this is your dashboard</h5>
      <button onClick={handleClick}>LogOut</button>
      <div style={gifContainerStyle}>
      <img
          src="https://cdn.svgator.com/images/2022/11/Chart-run-cycle.gif"
          alt="Running Chart"
          style={gifStyle}
        />
      </div>
    </div>
  );
}
const dashboardStyle = {
  Backgroundcolor:"yellow",
  textAlign: "center",
  padding: "20px",
};

const gifContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const gifStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
};
export default Dashboard;




