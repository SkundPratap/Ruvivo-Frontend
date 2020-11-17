import React, { Component } from 'react';
import {
  Navbar,

  NavbarBrand,

} from 'reactstrap';



export default class Example extends Component {
  constructor(props) {
    super(props);

  }

  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="r-brand">R</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
