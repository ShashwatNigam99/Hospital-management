import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { SimpleInput, Select, TextArea } from './../../Bootstrap/components/Form';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      people: null,
      error:null,
      redirect: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    var {
      first_name,
      password,
    } = this.form;

    const personData = {
      first_name: first_name.value,
      password: password.value,
    };

    console.log("http://localhost:3001/people?first_name="+first_name.value+"&password="+password.value);

    const url = "http://localhost:3001/people?first_name="+first_name.value+"&password="+password.value;

    fetch(url)
      .then(resp =>
        {
          if(resp.status==200)
              {
               resp.json().then(people =>
                    {
                      if(people[0]){
                      this.setState({
                             people : people[0],
                             error: null,
                             redirect:true
                            })
                       sessionStorage.setItem('LoggedIn',String(people[0].first_name));
                       }
                       else
                       {
                         this.setState({
                             people : null,
                             error: true,
                             redirect: false
                            })
                       }
                    });
              }
              else
              {
                this.setState({
                    people : null,
                    error: true,
                    redirect: false
                   })
              }
            });
    }

  render() {
    const { redirect } = this.state;
    if(redirect) {
     return <Redirect to="/patients" />
    }
    const {error} = this.state;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <h1>Login</h1>
            { error &&
               <p>Try again</p> }
              <hr/>
              <form
                onSubmit={this.handleSubmit.bind(this)}
                ref={form => this.form = form}>

                <SimpleInput
                  title="First Name"
                  name="first_name"
                  inputType="text"
                  placeholder="First Name"
                  hasError={this.state.hasError}
                  errors={this.state.errors} />

                <SimpleInput
                  title="Password"
                  name="password"
                  inputType="password"
                  placeholder="Password"
                  hasError={this.state.hasError}
                  errors={this.state.errors} />

                <div className="form-group">
                  <input type="submit"
                    className="btn btn-default"/>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
