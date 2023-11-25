import React from "react";
import "./header.css";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="dropdown">
          <Link to='profile' class="dropbtn">
            <Avatar style={{ background: "green" }}> U </Avatar>
          </Link>
        </div>
        <Link to="/"> Home </Link>
        
        
        <h1 onClick={()=>navigate('/')} style={{cursor: 'pointer'}}> EduVerse </h1>
      </div>{" "}
    </>
  );
};
export default Header;
