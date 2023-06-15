import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => { (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Vinoteca Maipu</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Bebidas</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
        </Container>
        {/*<img  src={LogoVino} alt="loguito" />*/}
    </Navbar>
)}