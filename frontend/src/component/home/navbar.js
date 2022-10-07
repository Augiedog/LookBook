import { BrowserRouter, Outlet} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

function NavBar() {
    
    return (
        <Navbar bg="dark" variant="dark" sticky='top' >
            <Container>
                {/* <Navbar.Brand href="#home" style={{ 'color': 'pink' }}>Oma's Tree</Navbar.Brand> */}
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/pictures" >Slide Show</Nav.Link>
                        <Nav.Link href="/pictures/upload">Upload</Nav.Link>
                        <Nav.Link href="/error">grandKidOne</Nav.Link>
                        <Nav.Link href="/error">grandKidTwo</Nav.Link>
                    </Nav>
                    <Outlet />
                    
                    <Navbar.Text>
                        {/* Signed in as: <a href="/">{location.state && location.state.user.username}</a> */}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavBar