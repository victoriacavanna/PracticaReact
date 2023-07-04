
import CardProductos from '../productos/CardProductos';
import {Container, Row} from 'react-bootstrap'
const Catalogo = () => {
  return (
    <Container >
                <h2 className='textDisponible'>Productos disponibles</h2>
                <Row>
                    <CardProductos />
                </Row>
    </Container>
  )
}

export default Catalogo;