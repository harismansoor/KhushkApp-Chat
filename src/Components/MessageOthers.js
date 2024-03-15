import React from "react";

function MessageOthers() {
  var props1 = { name: "RandomUser", message: "This is a sample message" };
  return (
    <div className="others-message-container">
      <div className="conversationContainer">
        <p className="convo-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="convo-title">{props1.name}</p>
          <p className="convo-lastMessage">{props1.message}</p>
          <p className="convo-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
