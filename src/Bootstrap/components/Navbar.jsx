import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink to="/" className="navbar-brand">Hospital Frontdesk</NavLink>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li> <NavLink to="/patients/new" activeClassName="active">New Registration</NavLink></li>
            <li> <NavLink to="/patients" activeClassName="active">Reports</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
