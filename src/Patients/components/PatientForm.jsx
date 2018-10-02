import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { SimpleInput, Select, TextArea } from './../../Bootstrap/components/Form';

class PatientForm extends Component {
  constructor() {
    super();

    this.state = {
      errors: {},
      hasError: false,
      loading: false,
      patient: '',
      redirect: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    var {
      first_name,
      last_name,
      age,
      gender,
      address,
      service_type,
      fee_amount,
    } = this.form;

    const patientData = {
      first_name: first_name.value,
      last_name: last_name.value,
      age: age.value,
      gender: gender.value,
      address: address.value,
      service_type: service_type.value,
      fee_amount: fee_amount.value,
    };

    this.setState({ loading: true });
    axios.post('/patients', { patient: patientData })
      .then(patient => {
        this.setState({
          patient,
          errors: {},
          hasError: false,
          loading: false,
          redirect: true,
        })
      })
      .catch(error => {
        this.setState({
          patient: '',
          errors: error.response,
          hasError: true,
          loading: false,
          redirect: false,
        })

        console.log('state: ', this.state);
      });
  }

  render() {
    const { redirect } = this.state;

    if(redirect) {
      return <Redirect to="/patients" />
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
                  title="First Name"
                  name="first_name"
                  inputType="text"
                  placeholder="First Name"
                  hasError={this.state.hasError}
                  errors={this.state.errors} />

                <SimpleInput
                  title="Last Name"
                  name="last_name"
                  inputType="text"
                  placeholder="Last Name"
                  hasError={this.state.hasError}
                  errors={this.state.errors} />

                <SimpleInput
                  title="Age"
                  name="age"
                  inputType="number"
                  placeholder="Age"
                  hasError={this.state.hasError}
                  errors={this.state.errors} />

                <Select
                  name="gender"
                  title="Gender"
                  options={['Male', 'Female']}
                  hasError={this.state.hasError}
                  errors={this.state.errors} />

                <Select
                  title="Service Type"
                  name="service_type"
                  options={['Normal', 'Emergency']}
                  hasError={this.state.hasError}
                  errors={this.state.errors} />

                <TextArea
                  title="Address"
                  name="address"
                  cols={30}
                  rows={3}
                  hasError={this.state.hasError}
                  errors={this.state.errors} />

                <SimpleInput
                  inputType="number"
                  name="fee_amount"
                  title="Fee Amount"
                  hasError={this.state.hasError}
                  errors={this.state.errors} />


                <div className="form-group">
                  <input type="submit"
                    value={this.state.loading ? 'Submitting Data...' : 'Create New Patient'}
                    className="btn btn-default"
                    disabled={this.state.loading}/>

                  &nbsp;
                  <Link to="/patients" className="btn btn-warning">Go Back</Link>
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
