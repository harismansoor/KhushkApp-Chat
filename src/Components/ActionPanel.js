import { IconButton } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import DeleteIcon from "@mui/icons-material/Delete";

function ActionPanel({ props }) {
  return (
    <div className="ActionPanel-container">
      {props && (
        <div className="Action-header">
          <p className="convo-icon">{props.name[0]}</p>
          <div className="Action-header-text">
            <p className="convo-title-two">{props.name}</p>
            <p className="convo-timeStamp-two">{props.timeStamp}</p>
          </div>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      <div className="Action-chat">
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
      </div>
      <div className="Action-input">
        <input placeholder="Type your message" className="search-box" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ActionPanel;
