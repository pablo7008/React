import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const refDoc= doc(db, "items1", id)
        getDoc (refDoc).then(snapshot =>
            setProduct({id: snapshot.id, ... snapshot.data()})
    )}, [id])
    return(
    <Container className="mt-4">
        <h3>Detalle</h3>
        <ItemDetail botella={product} />
    </Container>
)}

