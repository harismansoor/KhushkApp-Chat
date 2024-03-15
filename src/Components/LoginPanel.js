/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../Assets/KhushkApp-white.png";
import "./cStyle.css";
import { Button, TextField } from "@mui/material";
import bgOne from "../Assets/bg-one.webp";
import wallPaperOne from "../Assets/wallpaperOne.jpeg";

function LoginPanel() {
  return (
    <div className="login-container">
      <div className="imageContainer">
        <img src={wallPaperOne} alt="" className="bgOne" />
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="loginBox">
        <div className="loginContent">
          <p className="loginTitle">Login</p>
          <div className="loginFields">
            <TextField
              id="standard-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <div className="submit-button">
              <Button variant="outlined">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPanel;
