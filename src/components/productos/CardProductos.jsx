import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { ProductosContext } from '../../context/ProductsContext';
const CardProductos = () => {
    //Traer array de productos del contexto
    const { productos, setProductos } = useContext(ProductosContext);
    return (
        //Mostrar mensaje si no hay productos
        <>
                       
                    {productos === undefined ? (
                        <h2>Cargando...</h2>
                    ) : (
                        productos.map((producto) => (
                            //Cada columna tiene un identificador unico 
                            <Col key={producto.id}>
                                <Card>
                                    <Card.Img variant="top" src={producto.img} />
                                    <Card.Body>
                                        <Card.Title>{producto.nombre}</Card.Title>
                                        <Card.Text>
                                            Cantidad: {producto.stock}    Precio: {producto.precio}
                                        </Card.Text>
                                        <a href="/administracion"><Button>Modificar</Button></a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )
            }
        </>
    )
}

export default CardProductos