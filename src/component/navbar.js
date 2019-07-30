import React from 'react';
import { Navbar , Nav , Form, Button , FormControl  } from 'react-bootstrap';

function Na()
{
return <>
<header> 
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Tunisia</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Service</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </header>
 
  </>
}
export default Na;