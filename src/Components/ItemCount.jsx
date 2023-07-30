import {InputGroup} from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"

export const ItemCount = ({stock, onAdd, initial}) => {
    const [counter, setCounter] = useState(initial ?? 0)
    const handleIncreaseCount = () => {
        if (stock > counter) setCounter (counter + 1)
    }
    const handleDecreaseCount = () => {
        if (counter > 0) setCounter (counter - 1)
    }
    return (
        <section className="col-12 col-sm-6 col-md-3 mb-4">
            {stock > 0 ? (
                <>
                    <InputGroup>
                        <Button
                            variant= "primary"
                            onClick={handleIncreaseCount}
                        >
                            +
                        </Button>
                        <Form.Control
                            value={counter}
                            className="text-center"
                        />
                        <Button
                            variant="primary"
                            onClick={handleDecreaseCount}
                        >
                            -
                        </Button>
                    </InputGroup>
                    {!! counter &&(
                        <Button
                            variant="outline-primary"
                            className="mt-4"
                            onClick= {()=> onAdd(counter)}
                            >
                                Agregar al carrito
                            </Button>
                    )}
                    <div className="mt-4">
                        Stock disponible: {stock - counter}</div>
                </>
            ): (
                <>
                    <div className="mt-4">No hay stock</div>
                    <Link to="/">
                        <Button variant="outline-primary" className="mt-4">
                        Seguir Comprando</Button>
                    </Link>
                </>
            )}
        </section>
    )
}