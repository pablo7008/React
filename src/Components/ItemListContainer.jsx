import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import {getFirestore, getDocs, collection} from 'firebase/firestore'
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])

    const {id} = useParams()
    useEffect(()=>{
        const db = getFirestore();
        const refCollection = id;
        getDocs(refCollection).then((snapshot)=>{
            if (snapshot.size === 0) console.log ("no results");
            else
                console.log(
                    snapshot.docs.map((doc)=>{
                        return {id:doc.id, data: doc.data()};
                    })
                )
        })
    }) 
    

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(snapshot.data())
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


