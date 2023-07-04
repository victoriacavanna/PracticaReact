import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext";
//Import sweatAlert

//Recibir por props del elemento padre Tabla
import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext";

const FormUpdateProductos = ({ editProducto, handleClose }) => {
  // Estado inicial del formulario -> datos del producto pasado por props
  const [producto, setProducto] = useState(editProducto);

  // Usar el contexto para actualizar cambios en el producto
  const { updateProducto } = useContext(ProductosContext);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    // Recibimos el producto y actualizamos el nuevo valor del campo de entrada
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  // Manejar el evento de envío del formulario
  const handleEdit = (e) => {
    e.preventDefault();
    updateProducto(producto); // Actualizar el producto utilizando la función del contexto
    handleClose(); // Cerrar el modal
  };

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleEdit} className="formEdit">
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
            <button className="btn btn-secondary">
              Editar Producto
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormUpdateProductos;
