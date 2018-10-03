import React, { Component } from 'react';

class Dashboard extends Component{
  render(){
    return(
        <div class="jumbotron">
          <div class="container text-center">
              <h1>Welcome to Hospital Management service</h1>
              <h4>You are signed in as {sessionStorage.getItem("LoggedIn")}</h4>
          </div>
        </div>
    )
  }
}
export default Dashboard;
