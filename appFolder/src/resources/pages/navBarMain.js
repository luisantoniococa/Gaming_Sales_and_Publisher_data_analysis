import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import '../../index.css';

const NavBarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light my-0 pl-0 py-0" style={{"borderBottom" : "2px solid grey"}}> {/* NavBar Styling */}
        {/* Nav Items */}
        <a className="navbar-brand p-3 my-0" id="nav_title" href="#/" style={{backgroundColor:"darkblue", color:"white"}}>Daniel Ruch </a> {/* NavBar Brand */}
        <h2>Portfolio</h2>

        {/* Setup Toggler Icon ("Hamburger")*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent"> {/* Wrap Navbar items to condense into dropdown on small screens */}
          {/* Left justified items */}
          <ul className="navbar-nav ml-2 mr-auto">
            {/* Catalog Link */}
            <li className="nav-item">
              <a href="#/Portfolio/" class="text-light nav-link">
                Project Catalog
              </a>
            </li>
            {/* Tech/Frameworks Link */}
            <li className="nav-item">
              <a href="#/Technologies/" class="text-light nav-link">
                Tech/Frameworks
              </a>
            </li>

          </ul>

          {/* Right justified items */}
          <ul className="navbar-nav ml-auto">
            {/* Remove Dropdown since it isn't really working right now 
            <li className="nav-item dropdown my-auto">
                <a className="nav-link dropdown-toggle btn-primary bg-dark text-light" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Projects
                </a>
                {// Dropdown Items
                }
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="Resources/vbaProject/vbaAnalysis.html">VBA Project</a>
                  <a className="dropdown-item" href="Resources/pythonProject/pythonAnalysis.html">Python Project</a>
                  <a className="dropdown-item" href="Resources/pandasProject/pandasAnalysis.html">Pandas Project</a>
                </div>

              </li>
              */}
              {/* GitHub */}
              <li className="nav-item">
                <a href="https://www.github.com/DanielRuch" class="text-light nav-link">
                  GitHub
                </a>
              </li>
              {/* LinkedIn */}
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/daniel-ruch/" class="text-light nav-link">
                  LinkedIn
                </a>
              </li>
              {/* About */}
              <li className="nav-item">
                <a href="#/About/" class="text-light nav-link">
                  About
                </a>
              </li>
          </ul>
        </div>
      </nav>
      {/* Remove ReactStrap powered navbar - refactored to pure react & bootstrap above
      {// Setup Navbar General Format
}
      <Navbar className="pl-0 sticky-top bg-dark py-0" expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            {// Dropdown menu
}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-light">
                Connect
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.linkedin.com/in/daniel-ruch/">
                  <i className="icon-linkedin"/>
                  LinkedIn
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
*/}
    </div>
  );
}

export default NavBarMain;