import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/LogoVino.png";
import { CartWidget } from "./CartWidget";
import {getFirestore, getDocs, collection} from 'firebase/firestore'
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

useEffect(()=>{
    const db = getFirestore();
    const refCollection = collection(db, "items");
    getDocs(refCollection).then((snapshot)=>{
        if (snapshot.size === 0) console.log ("no results");
        else
            console.log(
                snapshot.docs.map((doc)=>{
                    return {id:doc.id, data: doc.data()};
                })
            )
    })
}, []) 
const buscado = refCollection.map(product => product.category)
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