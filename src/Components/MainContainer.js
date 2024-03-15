/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./cStyle.css";
import ChatsPanel from "./ChatsPanel";
import ActionPanel from "./ActionPanel";
import LandingPanel from "./LandingPanel";
import CreateGroupsPanel from "./CreateGroupsPanel";
import GroupingUsers from "./GroupingUsers";

function MainContainer() {
  const [conversations] = useState([
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
    <div className="main-container">
      <ChatsPanel />
      <LandingPanel />
      {/* <ActionPanel props={conversations[0]} /> */}
      {/* <CreateGroupsPanel /> */}
      {/* <GroupingUsers /> */}
    </div>
  );
}

export default MainContainer;
