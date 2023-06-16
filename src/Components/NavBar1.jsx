import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/LogoVino.png";
import { CartWidget } from "./CartWidget";

export const NavBar1 = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <img src={Logo} alt='Logo' />
                <Navbar.Brand href='#home'>Vinoteca Maipu</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='#home'>Inicio</Nav.Link>
                    <Nav.Link href='#features'>Bebidas</Nav.Link>
                    <Nav.Link href='#pricing'>Contacto</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>);
};