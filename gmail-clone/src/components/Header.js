import React from "react";
import "../Css/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {  ArrowDropDown } from "@mui/icons-material";
import Notifications  from "@mui/icons-material/Notifications";
import AppsIcon from '@mui/icons-material/Apps';
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png"
          alt="logo"
        />
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail"/>
        <ArrowDropDown className="header-inputIcon"/>
      </div>
      <div className="header-right">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <Notifications/>
        </IconButton>
        <Avatar/>
      </div>
    </div>
  );
}

export default Header;
