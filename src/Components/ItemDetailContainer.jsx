import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import Bebidas from '../data/products.json'
import { ItemDetail } from "./ItemDetail"
//import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = props => {
    const [product, setProduct] = useState ([])

    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Bebidas)
            }, 2000)
        })
        promesa.then(result => {
                setProduct(result[id])
        })
    },[])

    return(
    <Container className="mt-4">
        <h3>Detalle</h3>
        {product.length === 0 ?(
            <div>Loading...</div>)
        : ( <ItemDetail botella={product} />
            )}
    </Container>
)}

