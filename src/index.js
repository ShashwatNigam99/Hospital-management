import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Bootstrap/components/Navbar';
import Patients from './Patients/components/Patients';
import PatientForm from './Patients/components/PatientForm';
import Dashboard from './Patients/components/Dashboard';
import EditPatients from './Patients/components/EditPatients';
import EditPatient from './Patients/components/EditPatient';



import Login from './Patients/components/Login';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';

// other libraries
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.js';

// Components

// router are handled from here
function Routes() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Login} />
          <Route exact path="/patients" component={Patients} />
          <Route path="/patients/new" component={PatientForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/editpatients" component={EditPatients} />
        <Route path="/editpatient/:id" component={EditPatient} />
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
