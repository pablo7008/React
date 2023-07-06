import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import Bebidas from '../data/products.json'
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = props => {
    const [products, setProducts] = useState ([])

    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Bebidas)
            }, 2000)
        })
        promesa.then(result => {
            if (id){
                setProducts(result.filter(product=>product.category === id))
            } else{
                setProducts(result)
            }
        })
    },[id])

    return(
    <Container>
        <h3>{props.greeting}</h3>
        {products.length === 0 ?(
            <div>Loading...</div>)
        : ( <ItemList products={products} />
            )}
    </Container>
)}


