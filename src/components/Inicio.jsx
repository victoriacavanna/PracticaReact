import { Container, Row } from 'react-bootstrap';
const Inicio = () => {
    return (
        <>
            <Container>
                <Row>
                    <div className='inicioWrapp'>
                        <h1>Inicio</h1>
                        <h3 className='inicioText'>Para editar catálogo dirigirse a <a href="/administracion">administración</a></h3>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Inicio