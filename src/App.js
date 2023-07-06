import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar1 } from "./components/NavBar1";

const Error404 = () => <h2>Error, no se encuentra la pagina solicitada, por favor volver a una anterior</h2>

function App() {

  return(  
    <BrowserRouter>
      <NavBar1 />
      <Routes>
        <Route 
        path="/home" element= {<ItemListContainer greeting = "Total de Bebidas"/>}/>
        <Route 
        path="/category/:id" element= {<ItemListContainer greeting = "Estas son nuestras bebidas encontradas" />}/>
        <Route 
        path="/item/:id" element= {<ItemDetailContainer greeting = "Informacion de la bebida seleccionada" />}/>
        <Route 
        path="*" element= {<Error404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
