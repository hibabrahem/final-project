import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Entete.css';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
function Entete() {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                {/* <Navbar.Brand href="#">EVENTY</Navbar.Brand> */}
                <img id='logoo' src={logo} alt="Logo" ></img>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/" className="liens">  <Nav.Link className="liens" href="#action1" >Acceuil</Nav.Link></NavLink>
                        <NavLink to="/Apropos" className="liens"> <Nav.Link className="liens" href="#action2">A propos</Nav.Link></NavLink>

                        <NavDropdown className="liens" title="Services" id="navbarScrollingDropdown">
                            <NavLink to="/service" className="services">  <NavDropdown.Item className='services' href="#action3" onClick={() => scrollToSection('mariage')}>Mariage</NavDropdown.Item></NavLink>


                            <NavLink to="/service" className="services">   <NavDropdown.Item className='services' href="#action4" onClick={() => scrollToSection('anniversaire')}>Anniversaire</NavDropdown.Item></NavLink>
                            <NavLink to="/service" className="services">     <NavDropdown.Item className='services' href="#action5" onClick={() => scrollToSection('evenement')}>Conférences</NavDropdown.Item></NavLink>
                        </NavDropdown>
                        <NavLink to="/mesreservation" className="liens"> <Nav.Link className="liens" href="#action2">Mes reservation</Nav.Link></NavLink>

                    </Nav>
                    
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="bouton" >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Entete;
