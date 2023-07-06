import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/LogoVino.png";
import { CartWidget } from "./CartWidget";
import Bebidas from '../data/products.json'
import { NavLink } from "react-router-dom";

const buscado = Bebidas.map(product => product.category)
let categorias = categoriasbebidas(buscado)
function categoriasbebidas (buscado){
    const sinrepetir = []
    for(let i = 0; i < buscado.length; i++) {
        if (!sinrepetir.includes(buscado[i])) {
            sinrepetir.push(buscado[i]);
        }
    }
    return sinrepetir
}
console.log(categorias)
export const NavBar1 = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <>
                <img src={Logo} alt='Logo' />
                <NavLink to="home">Vinoteca Maipu</NavLink>
                </>
                <Nav className='me-auto'>
                    {categorias.map(item =>(
                        <NavLink
                        key={item}
                        className="nav-link" to={`./category/${item}`}>
                        {item}
                        </NavLink>
                        ))}
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>);
};