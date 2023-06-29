
import ProductosContext from './context/ProductsContext';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Rutas from './components/rutas/Rutas';

function App() {

  return (
    <>
        <Header />
        <ProductosContext>
        <Rutas />
      </ProductosContext>
    </>
  )
}

export default App
