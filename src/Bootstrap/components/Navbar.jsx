import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{

  constructor() {
    super();
    this.state = {
      LoggedIn:sessionStorage.getItem('LoggedIn')
     }
  }

  componentWillMount() {
    this.setState({
      LoggedIn:sessionStorage.getItem('LoggedIn')
    })
  }

render(){
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
        { !this.state.LoggedIn &&
          <NavLink to="/" className="navbar-brand">Hospital Frontdesk</NavLink>
        }
        { this.state.LoggedIn!=null &&
          <NavLink to="/dashboard" className="navbar-brand">Hospital Frontdesk</NavLink>
        }
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {this.state.LoggedIn &&
            <li> <NavLink to="/patients/new" activeClassName="active">New Registration</NavLink></li>
            }
            {this.state.LoggedIn &&
            <li> <NavLink to="/patients" activeClassName="active">View Reports</NavLink></li>
            }
            {this.state.LoggedIn &&
            <li> <NavLink to="/editpatients" activeClassName="active">Edit Patients</NavLink></li>
            }
        </ul>
        </div>
      </div>
    </nav>
  )
}
}

export default Navbar;
