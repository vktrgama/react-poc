import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  const closeMenu = () => {
    setMenuOpen(false);
  }

  const handleStateChange = (props) => {
    setMenuOpen(props.isOpen);
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const linkHome = <NavLink className="menu-item" onClick={closeMenu} to="/">Home</NavLink>;
  const linkAbout = <NavLink className="menu-item" onClick={closeMenu} to="/about">About</NavLink>;
  const linkProjects = <NavLink className="menu-item" onClick={closeMenu} to="/projects">Projects</NavLink>;
  const linkContact = <NavLink className="menu-item" onClick={closeMenu} to="/">Contact</NavLink>;

  return (
    <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
      {linkHome}
      {linkAbout}
      {linkProjects}
      {linkContact}
    </Menu>
  );
};