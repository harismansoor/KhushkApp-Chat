import React from "react";
import mainLogo from "../Assets/Khushkapp-logo-main.png";

function LandingPanel() {
  return (
    <div className="welcome-container">
      <img src={mainLogo} alt="KhushkApp logo" />
      <p>Text directly to people present in the chat rooms</p>
    </div>
  );
}

export default LandingPanel;
