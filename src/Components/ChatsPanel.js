import React, { useState } from "react";
import "./cStyle.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
// import Logo from "../Assets/Khushkapp-logo-main.png";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";

export default function Chats(props) {
  // eslint-disable-next-line no-unused-vars
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "Lorem Ipsum",
      timeStamp: "Today",
    },
    {
      name: "Test2",
      lastMessage: "Lorem Ipsum test",
      timeStamp: "Today",
    },
  ]);
  return (
    <div className="Chats-container">
      {/* <div className="logo-header">
        <img src={Logo} alt="" />
      </div> */}
      <div className="chats-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="chats-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="chats-conversation">
        {conversations.map((conversation) => {
          return (
            <ConversationsItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
    </div>
  );
}
