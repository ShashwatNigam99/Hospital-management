import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reactable from 'reactable';

var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;

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



    renderTable()
    {
        const { patients } = this.state;
        return (
          <Table className="table"
            itemsPerPage={5}
            currentPage={0}
            sortable={true}
            data={patients}>
            <Thead>
              <Th column="full_name">Name</Th>
              <Th column="age">Age</Th>
              <Th column="gender">Sex</Th>
              <Th column="service_type">Service Type</Th>
              <Th column="fee_amount">Fee</Th>
            </Thead>
          </Table>
        )
    }

    render() {
         return (
           <div>
             {this.renderTable()}
           </div>
         )
      }
  }



export default Patients;
