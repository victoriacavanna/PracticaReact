import React, { useContext, Fragment } from 'react';
import { Table } from 'react-bootstrap';
import { ProductosContext } from '../../context/ProductsContext';

const Tabla = () => {
  const { productos, deleteProducts } = useContext(ProductosContext);

  const handleDelete = (productoId) => {
    deleteProducts(productoId);
  };

  return (
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
    </>
  );
};

export default Tabla;

