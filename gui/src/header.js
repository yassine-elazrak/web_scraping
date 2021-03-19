import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from 'react-bootstrap';


function Header() {
    return ( 
    <>
    <Navbar bg="dark">
    <Navbar.Brand href="#home">
    hello
      {/* <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> */}
    </Navbar.Brand>
    <Navbar.Brand href="#home">
    hello
    </Navbar.Brand>

  </Navbar>
  

    </>
    )
}



export default Header;