import { useContext } from "react"
import { CartContext } from "../contexts/cartContext"
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({botella}) => {
    const {addItem} = useContext(CartContext)
    const onAdd = quantity => addItem(botella, quantity)
    return (
        <div>
            <div>{botella.name}</div>
            <div>{botella.category}</div>
            <div>$ {botella.price}</div>
            <img src={botella.img} alt={botella.name}
        />
        <ItemCount stock = {botella.stock} onAdd = {onAdd} />
        </div>
    )
}