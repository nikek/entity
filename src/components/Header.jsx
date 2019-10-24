import React from "react";
import "./appbar.css";

export const Header = () => (
  <div className="appbar">
    <input type="search" className="search-box" />

    <div className="avatar"></div>
    <div className="notification"></div>
  </div>
);
