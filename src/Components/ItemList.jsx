import {Item } from "../components/Item"

export const ItemList = ({products}) => 
    products.map(botella => {return <Item key={botella.id} botella={botella}/>})
