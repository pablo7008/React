import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import { Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import Table from "react-bootstrap/esm/Table";
import {getFirestore, collection, addDoc} from 'firebase/firestore';

export const Cart = () => {
    const [Formulario, setFormulario] = useState({
        name:"",
        phone:"",
        email:"",
    })

    const {addToCart, clear, deleteItem} =
    useContext(CartContext)

    const sendOrder = () => {
        const order = {
            buyer: Formulario,
            items: addToCart,
            total: total(),
        }
        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(response=>{
            if (response.id){
                clear()
                alert("Su orden:" + response.id + "fue completada")
            }
        })
    }
    const handleChange = ev => {
        setFormulario(prev => ({
            ...prev,
            [ev.target.name] : ev.target.value,
        }))
    }
    const total = () =>
        addToCart.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price,
                0
        )
    
    return (
        <Container className="mt-4">
        <h1>Lista de Bebidas</h1>
        {!addToCart.length ? (
            <mark>No hay bebidas</mark>
        ): (
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th></th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {addToCart.map(producto=>(
                            <tr key={producto.id}>
                                <td>{producto.name}</td>
                                <td>
                                    <img
                                        height={60}
                                        src={producto.img}
                                        alt={producto.name}
                                    />
                                </td>
                                <td>{producto.price}</td>
                                <td>{producto.quantity}</td>
                                <td>
                                    <Button onClick={() =>
                                        deleteItem(producto.id)}
                                    >Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td></td>
                            <td>{total()}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </Table>
                <h2>Ingresar Datos de Usuario</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={handleChange} value={Formulario.name} type="text" name="name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={handleChange} value={Formulario.email} type="email" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Numero de Telefono</Form.Label>
                        <Form.Control onChange={handleChange} value={Formulario.phone} type="text" name="phone"/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={sendOrder}>
                        Submit
                    </Button>
                </Form>
            </>
        )}
    </Container>
    )
}