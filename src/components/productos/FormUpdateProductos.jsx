import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext";
//Import sweatAlert

//Recibir por props del elemento padre Tabla
const FormUpdateProductos = ({editProducto, handleClose}) => {
    //Estado inicial del form -> datos del producto pasado por props
    const [producto, setProducto] = useState(editProducto);

    //Usar contexto para actualizar cambios
    const {updateProductos} = useContext(ProductosContext);

    const handleChange = (e) => {
        //Recibimos producto y actualizamos el nuevo valor de input
        setProducto({...producto, [e.target.name]: e.target.value});
    }
    
    //Cuando se envía form
    const handleEdit = (e) => {
        e.PreventDefault();
        updateProductos(producto);
        handleClose();
    };
  return (
    <Container>
        <Row>
            <Col>
            <form onSubmit={handleEdit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Producto
                    </label>
                    <input
                      type="text"
                      className="form-control inputProduct"
                      id="nombre"
                      name="nombre"
                    value={producto.nombre}
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
                        value={producto.precio}
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
                      value={producto.stock}
                      onChange={handleChange}
                      aria-describedby="stock"
                      required
                    />
                  </div>
                  <button className="btn btn-secondary" onClick={handleEdit}>
                    Editar Producto
                  </button>
                </form>
            </Col>
        </Row>
    </Container>

  )
}

export default FormUpdateProductos;