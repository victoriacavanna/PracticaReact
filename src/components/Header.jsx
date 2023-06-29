import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'


const Header = () => {

    return (
        <>
            <Navbar sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React Practica</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/agregar">Agregar</Nav.Link>
                            <Nav.Link href="/catalogo">Catálogo</Nav.Link>
                            <Nav.Link href="/administracion">Administración</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header