import React from "react";
import "../Css/sidebar-option.css";
const SidebarOption = ({ Icon, title, number,selected }) => {
  return (
    <div className={`sidebar-option ${selected && "sidebar-option--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
