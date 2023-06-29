import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductosContext = createContext();

//   para que funcione los componentes que esten dentro del context
const ProductsContext = ({ children }) => {
    //En plural porque trae todos los productos en un array
    const [productos, setProductos] = useState();

    //Get --> traer los productos
    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3001/productos")
            console.log(response);
            setProductos(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    //Post --> crear producto
    const addProducts = (producto) => {

        try {
            //Subimos datos a base de datos
            const response = axios.post("http://localhost:3001/productos", producto);
            console.log(response);

            setProductos([...productos, producto]);
            //Una vez que se mande limpiar form -> cambiar estado
            setProductos({
                nombre: "",
                precio: "",
                stock: "",
                img: "",
            })
            window.location.reload();
        } catch (error) {
            console.log(error);
        }

    }
     //Delete --> eliminar producto
     const deleteProducts = async (productoId) => {
        try {
            //Eliminamos datos de base de datos
            const response = await axios.delete(`http://localhost:3001/productos/${productoId}`);
            console.log(response);
            setProductos(productos.filter((producto) => producto.id !== productoId));
            window.location.reload();
        } catch (error) {
            console.log(error);
        }

    }


return (
    <>
        <ProductosContext.Provider value={{ productos, setProductos, addProducts, deleteProducts }}>{children}</ProductosContext.Provider>
    </>
)
}
export default ProductsContext;