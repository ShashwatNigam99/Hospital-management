import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';

// other libraries
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.js';

// baseurl of server/rest api
//axios.defaults.baseURL = BASEURL;

// Components
import Navbar from './Bootstrap/components/Navbar';
import Patients from './Patients/components/Patients';
import PatientForm from './Patients/components/PatientForm';


// router are handled from here
function Routes() {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="container">
          <Route exact path="/" component={PatientForm} />
          <Route exact path="/patients" component={Patients} />
          <Route path="/patients/new" component={PatientForm} />
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
