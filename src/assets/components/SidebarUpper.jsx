import React from "react";
import "./SidebarUpper.css" ;
import UpperNavItem from "./UpperNavItem";

function SidebarUpper() {
  return (
    <div className="side-bar__upper">
      <nav>
        <ul className="side-bar__upper-nav">
          <UpperNavItem text="Home" icon="ri-home-5-fill" active="true" />
          <UpperNavItem text="Search" icon="ri-search-line" />
        </ul>
      </nav>
    </div>
  );
}

export default SidebarUpper;
