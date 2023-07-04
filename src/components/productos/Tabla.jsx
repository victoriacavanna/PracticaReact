import React, { useContext, Fragment, useState} from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { ProductosContext } from '../../context/ProductsContext';
import FormUpdateProductos from './FormUpdateProductos';

const Tabla = () => {
  const { productos, deleteProducts } = useContext(ProductosContext);

  //Para actualizar producto editado
  const [editProducto, setEditProducto] = useState();


  //Modal bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //Tomar producto específico
  const handleEdit = (producto) => {
    console.log(producto);
    setEditProducto(producto);
    handleShow();
  }
  const handleDelete = (productoId) => {
    deleteProducts(productoId);
  };

  return (
      //Mostrar mensaje si no hay productos
    <>
      {(productos === undefined || productos.length === 0 )? (
        <h4 className='textAdmin'>No hay productos disponibles</h4>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Imagenes</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <Fragment key={producto.id}>
                <tr>
                  <td>{producto.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.img}</td>
                  <td>
                    <button className='btn mb-1 me-2'onClick={() => handleEdit(producto)}>Editar</button>
                    <button className='btn' onClick={() => handleDelete(producto.id)}>
                      Eliminar
                    </button>

                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </Table>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUpdateProductos editProducto={editProducto} handleClose={handleClose}/> {/*Pasar por props el producto seleccionado*/}
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default Tabla;

