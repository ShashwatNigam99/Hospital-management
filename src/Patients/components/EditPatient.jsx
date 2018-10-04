import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { SimpleInput, Select, TextArea } from './../../Bootstrap/components/Form';

class EditPatient extends Component{
  constructor(){
    super();
    this.state = {
      patient:null,
      redirect:false
    }
  }

  componentDidMount(){
    const url = "http://localhost:3001/patients/"+this.props.match.params.id;
      fetch(url)
        .then(resp =>
           {
             if(resp.status>=200 && resp.status<=400)
                {
                  resp.json().then(patient =>{
                        this.setState({
                            patient : patient,
                            redirect: false
                           })
                     });
                }
            });
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

          const url = "http://localhost:3001/patients/"+this.props.match.params.id;

          console.log(JSON.stringify(patientData));
          fetch(url,{
          method:'PUT',
          body: JSON.stringify(patientData),
          headers: { 'Content-Type': 'application/json' }
          })
            .then(resp =>
              {
                if(resp.status>=200 && resp.status<=400)
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

    render(){
      const { redirect } = this.state;

      if(redirect) {
        return <Redirect to="/editpatients" />
      }
      
      const { patient } = this.state;

      return(
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
                <h1>Edit Registration</h1>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <th>Service Type</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Fee Amount (In Rs.)</th>
                      </tr>
                      <tr>
                        <td>{patient.service_type}</td>
                      <td>{patient.full_name}</td>
                    <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                <td>{patient.fee_amount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr/>
                <form
                  onSubmit={this.handleSubmit.bind(this)}
                  ref={form => this.form = form}>

                  <SimpleInput
                    title="Full_Name"
                    name="full_name"
                    inputType="text"
                    placeholder={this.state.full_name}
                     />

                  <SimpleInput
                    title="Age"
                    name="age"
                    inputType="number"
                    placeholder={this.state.age}
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
                    placeholder={this.state.fee_amount}
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

export default EditPatient;
