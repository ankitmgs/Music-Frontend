import React from "react";
import { stack as Menu } from "react-burger-menu";
import '../utils/SlideBar.css'

export default (props) => {
  return (
    <Menu>

      <a className="menu-item" href="/">
        Admin
      </a>
      <a className="menu-item" href="/salads">
        Artist
      </a>
      <a className="menu-item" href="/pizzas">
        User 
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
