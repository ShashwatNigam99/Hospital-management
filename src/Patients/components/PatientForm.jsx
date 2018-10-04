import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { SimpleInput, Select, TextArea } from './../../Bootstrap/components/Form';

class PatientForm extends Component {
  constructor() {
    super();

    this.state = {
      patient: null,
      redirect: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    var {
      full_name,
      age,
      gender,
      service_type,
      fee_amount,
    } = this.form;

    const patientData = {
      full_name: full_name.value,
      age: age.value,
      gender: gender.value,
      service_type: service_type.value,
      fee_amount: fee_amount.value,
    };

    const url = "http://localhost:3001/patients";

    console.log(JSON.stringify(patientData));
    fetch(url,{
    method:'POST',
    body: JSON.stringify(patientData),
    headers: { 'Content-Type': 'application/json' }
    })
      .then(resp =>
        {
          if(resp.status>=200 && resp.status<=300)
              {
               resp.json().then(patient =>
                    {
                      console.log(patient)
                      this.setState({
                          patient: patient,
                          redirect:true
                         })
                    });
               }
        });
    }



  render() {
    const { redirect } = this.state;

    if(redirect) {
      return <Redirect to="/editpatients" />
    }

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <h1>Registration Form</h1>
              <hr/>
              <form
                onSubmit={this.handleSubmit.bind(this)}
                ref={form => this.form = form}>

                <SimpleInput
                  title="Full_Name"
                  name="full_name"
                  inputType="text"
                  placeholder="Full Name"
                   />

                <SimpleInput
                  title="Age"
                  name="age"
                  inputType="number"
                  placeholder="Age"
                   />

                <Select
                  name="gender"
                  title="Gender"
                  options={['M', 'F']}
                   />

                <Select
                  title="Service Type"
                  name="service_type"
                  options={['Normal', 'Emergency']}
                   />

                <SimpleInput
                  inputType="number"
                  name="fee_amount"
                  title="Fee Amount"
                   />


                <div className="form-group">
                  <input type="submit"
                    className="btn btn-default"/>

                  &nbsp;
                  <Link to="/editpatients" className="btn btn-warning">Go Back</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PatientForm;
