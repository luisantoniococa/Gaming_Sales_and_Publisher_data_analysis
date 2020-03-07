import React, { useState } from 'react';
import '../../index.css';

const NavBarMain = (props) => {
  //const [isOpen, setIsOpen] = useState(false);

  //const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light my-0 pl-0 py-0" style={{"borderBottom" : "2px solid grey"}}> {/* NavBar Styling */}
        {/* Nav Items */}
        <a className="navbar-brand p-3 my-0" id="nav_title" href="#/" style={{backgroundColor:"darkblue", color:"white"}}>Project 2 </a> {/* NavBar Brand */}
        <h2>Video Games!</h2>

        {/* Setup Toggler Icon ("Hamburger")*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent"> {/* Wrap Navbar items to condense into dropdown on small screens */}
          {/* Left justified items */}
          <ul className="navbar-nav ml-2 mr-auto">
            {/* Catalog Link */}
            <li className="nav-item">
              <a href="#/Companies/" className="text-light nav-link">
                Companies
              </a>
            </li>
            {/* Tech/Frameworks Link */}
            <li className="nav-item">
              <a href="#/Games/" className="text-light nav-link">
                Games
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
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarMain;