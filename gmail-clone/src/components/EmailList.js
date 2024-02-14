import React from "react";
import "../Css/EmailList.css";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { IconButton } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <CheckBoxOutlineBlankOutlinedIcon/>
        <IconButton>
          <ArrowDropDown />
        </IconButton>       
        <IconButton>
          <RedoIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default EmailList;
