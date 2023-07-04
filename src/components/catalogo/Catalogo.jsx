import React from 'react'
import CardProductos from '../productos/CardProductos';

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