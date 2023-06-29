import axios from "axios";
import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext"; 
const FormAddProductos = () => {
  const { addProducts } = useContext(ProductosContext);
    const [productos, setProductos] = useState({
        nombre: "",
        precio: "",
        stock: "",
        img: "https://picsum.photos/200/300?random=${producto.id}",
    });
    const handleChange = (e) => {
        setProductos({ ...productos, [e.target.name]: e.target.value.trim() })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        addProducts(productos);
    }
    return (
        <>
          <Container className="productosForm">
            <Row>
              <Col>
                <h1>Agregar Productos</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Producto
                    </label>
                    <input
                      type="text"
                      className="form-control inputProduct"
                      id="nombre"
                      name="nombre"
                      value={productos.nombre}
                      onChange={handleChange}
                      aria-describedby="nombre"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="precio" className="form-label">
                      Precio
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="precio"
                      name="precio"
                      value={productos.precio}
                      onChange={handleChange}
                      aria-describedby="precio"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="stock" className="form-label">
                      Stock
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="stock"
                      name="stock"
                      value={productos.stock}
                      onChange={handleChange}
                      aria-describedby="stock"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary">
                    Enviar
                  </button>
                </form>
              </Col>
            </Row>
          </Container>
        </>
      );
    };
    
    export default FormAddProductos