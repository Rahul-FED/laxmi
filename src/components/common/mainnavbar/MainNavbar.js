"use client"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navbar.module.scss'
import Image from 'next/image';

const MainNavbar = () => {
  return (
    <section className={styles.navmain}>
       <div className="container">
        <div className="row">
        <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src="/images/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <div className={styles.mainavlinks}>
          <Nav.Link href="#action1" className={styles.navlinks}>Home</Nav.Link>
          <Nav.Link href="#action2" className={styles.navlinks}>Manage Booking </Nav.Link>
          <Nav.Link href="#action2" className={styles.navlinks}>Package</Nav.Link>
          <Nav.Link href="#action2" className={styles.navlinks}>Service</Nav.Link>
          <Nav.Link href="#action2" className={styles.navlinks}>Contact</Nav.Link>
          <Nav.Link href="#action2" className={styles.navlinks}>More</Nav.Link>
          <div>
          <NavDropdown 
            title={<Image src="/images/user.png" width={41} height={41} alt="dropdown image" className={styles.navdropdown} />}
            id="navbarScrollingDropdown" 
          >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
       </div>
    </section>
  )
}

export default MainNavbar