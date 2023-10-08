import {Button,Container,Nav,Form,Navbar,NavDropdown,Offcanvas} from 'react-bootstrap';

function NavbarCont() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Form.Control
              type="search"
              placeholder="Search"
              className="ms-5"
              aria-label="Search"
              style={{width:'950px'}}
            />
            <Nav.Link href="#action2" className='ms-5'><i className="fa-solid fa-box me-2"></i>Become a seller</Nav.Link>
            <Nav.Link href="#action1" className=''><i className="fa-regular fa-user me-2"></i>Sign</Nav.Link>
            <Nav.Link href="#action1" className=''><i className="fa-solid fa-cart-shopping me-2"></i>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarCont;