import {Item } from "../components/Item"

export const ItemList = ({products}) => 
    products.map(botella => <Item botella={botella}/>)
