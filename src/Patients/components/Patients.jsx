import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Patients extends Component {
  constructor() {
    super();
    this.state = {
      patients: [],
    }
  }

  componentWillMount() {

        const url = "http://localhost:3001/patients";

        fetch(url)
          .then(resp =>
            {
              if(resp.status==200)
                  {
                   resp.json().then(patients =>
                        {
                          this.setState({
                              patients : patients
                             })
                       });
              }});
        }


  render() {
    const { patients } = this.state;

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <Link className="btn btn-success" to="/patients/new">
            <span className="glyphicon glyphicon-plus"></span>
            Add New Entry
          </Link>
          <br/>

          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>SN</th>
                  <th>Service Type</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Fee Amount (In Rs.)</th>
                </tr>

                { patients.map((patient, i) => <PatientList key={i} sn={i} patient={patient} />) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function PatientList({...props}) {
  return (
    <tr>
      <td>{parseInt(props.sn) + 1}</td>
      <td>{props.patient.service_type}</td>
      <td>{props.patient.full_name}</td>
      <td>{props.patient.age}</td>
      <td>{props.patient.gender}</td>
      <td>{props.patient.fee_amount}</td>
      <td>
      </td>
    </tr>
  )
}


export default Patients;
