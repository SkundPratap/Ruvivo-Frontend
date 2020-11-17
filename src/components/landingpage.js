import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import JobPreferences from './jobpreferences';
import PersonalDetails from './personaldetails';
import WorkExperience from './workexperience';


export default class Example extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (

      <div>
          
            <nav class="navbar navbar-dark bg-primary justify-content-between">
            <a class="navbar-brand">Create Candidate Profile</a>
            <form className="form-inline">
                <a class="navbar-brand">Sourced.ai</a>
                <button type="button" class="btn btn-dark">Logout</button>
            </form>
            </nav>

            
        <Navbar light expand="md" className="first">
          <NavbarBrand className="r-brand">Create your profile to get sourced!</NavbarBrand>
        </Navbar>
        <div><PersonalDetails/></div>
        <div><WorkExperience/></div>
        <div><JobPreferences/></div>
        <br/>
        <div style={{marginLeft:'40%', marginBottom:'5%'}}><a href="#" class="btn btn-primary" style={{justifyContent:'center'}}>Create Profile</a></div>
      </div> 
    );
  }
}
