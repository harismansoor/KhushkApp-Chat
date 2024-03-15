import { IconButton } from "@mui/material";
import AddBoxRoundedIcon from "@mui/icons-material/AddBox";
import React from "react";

function CreateGroupsPanel() {
  return (
    <div className="createGroupsContainer">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton>
        <AddBoxRoundedIcon />
      </IconButton>
    </div>
  );
}

export default CreateGroupsPanel;
