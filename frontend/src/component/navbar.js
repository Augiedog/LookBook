import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

function NavBar() {
    
    return (
        <Navbar bg="dark" variant="dark" sticky='top' >
            <Container>
                {/* <Navbar.Brand href="#home" style={{ 'color': 'pink' }}>Oma's Tree</Navbar.Brand> */}
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#2">firstKid</Nav.Link>
                        <Nav.Link href="#7">secondKid</Nav.Link>
                        <Nav.Link href="#5">grandKidOne</Nav.Link>
                        <Nav.Link href="#6">grandKidTwo</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Navbar.Text>
                        {/* Signed in as: <a href="/">{location.state && location.state.user.username}</a> */}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavBar