import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
        const { stock, ... rest} = item
        const alreadyExists = cartList.some(
            items => items.id === item.id
        )
        if (!alreadyExists)
            setCartList (prev => [
                ...prev,
                {...item,quantity},
            ])
        else {
            const actualizarItems = cartList.map(
                producto=>{
                    if (producto.id === rest.id)
                    return {... producto,
                    quantity: producto.quantity + quantity,
                    }
                    else return producto
                }
            )
        }
        if(isInCart(cartList.id)){
            setCartList (cartList.map(product =>{
                return product.id === item.id ?{... product, quantity:product.quantity + quantity} : product
                }));
            }else {
            setCartList ([...cartList,{...item,quantity}]);
        }
        }
        const removeList = () => {
            setCartList([])
        }
        const deleteItem = (id) => {
            const OtroProducto = cartList.filter(producto => producto.id !== id)
            setCartList(OtroProducto)
        }
        const isInCart = (id) =>
        cartList.find((product)=> product.id === id) ? true : false;

        return(
            <CartContext.Provider value ={{cartList, addToCart, removeList, deleteItem,isInCart}}>
                <div>
                    {children}
                </div>
            </CartContext.Provider>
        )
}