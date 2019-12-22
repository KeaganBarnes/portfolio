import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";


const Navbar = () => (
  <Menu className=".ui.menu">
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="/about">
      <Menu.Item>
        About Me
    </Menu.Item>
    </NavLink>
    <NavLink to="/resume">
      <Menu.Item>
        Resume
    </Menu.Item>
    </NavLink>
    <NavLink to="/projects">
      <Menu.Item>
        Projects
    </Menu.Item>
    </NavLink>
  </Menu>
  
)

export default Navbar;