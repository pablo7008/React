import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./Components/Navbar";
const ItemListContainer = props => <div>{props.greeting}</div>

function App() {
  return(  
    <>
      <NavBar />
      <ItemListContainer greeting = "Primer mensaje"/>
    </>
  )
}

export default App;
