import React, { Component } from "react"
import { NavLink, } from "react-router-dom"
import { Menu, } from "semantic-ui-react"

export default class Navbar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state


    return (
      <Menu className="menu inverted">
        <NavLink to="/">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/about">
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/resume">
          <Menu.Item
            name='resume'
            active={activeItem === 'resume'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/projects">
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="contact">
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
        </NavLink>
      </Menu>
    )
  }
}