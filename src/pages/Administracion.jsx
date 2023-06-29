import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Tabla from '../components/productos/Tabla'

const Administracion = () => {
  return (
    <>
    <h2 className='titleAdmin'>Administración</h2>
    <Container className='adminContainer'>
        <Row>
            <Col>
            <Tabla />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Administracion