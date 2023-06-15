import carrito from "../assets/shopping.png"

const styles = {
    img:{
        height: "2rem",
        width: "auto",
    },
    spam:{
        color: "white",
        paddingLeft: 10,
    }
}
export const CartWidget = () => (
<>
<img src = {carrito} style={styles.img} alt="Carrito" /> <span style={styles.spam}>0</span>
</>)