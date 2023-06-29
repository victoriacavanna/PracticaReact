import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { ProductosContext } from '../../context/ProductsContext';
const CardProductos = () => {
    const { productos, setProductos } = useContext(ProductosContext);
    return (
        <>
            <Container >
                <h2 className='textDisponible'>Productos disponibles</h2>
                <Row>
                    {productos === undefined ? (
                        <h2>Cargando...</h2>
                    ) : (
                        productos.map((producto) => (
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
                </Row>
            </Container>
        </>
    )
}

export default CardProductos