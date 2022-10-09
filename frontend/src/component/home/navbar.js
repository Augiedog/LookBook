import { BrowserRouter, Outlet } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from "react-router-dom"
// import Form from 'react-bootstrap/Form'
// import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { CurrentUser } from '../../contexts/currentUser'
import { useContext } from "react"

function NavBar() {
    const history = useNavigate()
    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <Navbar.Text>
                Signed in as: <a href="/">{currentUser.firstName + ' ' + currentUser.lastName}</a>
            </Navbar.Text>
        )
    }

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
                        <Nav.Link href="/error">Print</Nav.Link>
                        {/* <Nav.Link href="/login">Log In</Nav.Link>
                        <Nav.Link href="/signUp">Sign Up</Nav.Link> */}
                    </Nav>
                    {loginActions}
                    <Outlet />
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavBar