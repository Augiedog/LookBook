import { Link, Outlet } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { CurrentUser } from '../../contexts/currentUser';
import { useContext } from "react";

function NavBar() {
    const history = useNavigate()
    const { currentUser } = useContext(CurrentUser)

//     <nav>
//     <ul>
//       <li><Link to="/login">Log In</Link></li>
//     </ul>
//   </nav>

    let logedinAction = (
        <>
            <Nav.Link><Link to="/login">Log In</Link></Nav.Link>
            <Nav.Link><Link to="/signUp">Sign Up</Link></Nav.Link>
        </>
    )

    let loginActions = (
        <>
            <Navbar.Text>
                <Nav.Link><Link to="/signUp">Sign up</Link></Nav.Link>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Navbar.Text>
        </>
    )

    if (currentUser) {
        logedinAction = (
            <>
                <Nav.Link><Link to="/gallery">Gallery</Link></Nav.Link>
                <Nav.Link><Link to="/pictures">Slide Show</Link></Nav.Link>
                <Nav.Link><Link to="/pictures/upload">Upload</Link></Nav.Link>
                <Nav.Link><Link to="/error">Print</Link></Nav.Link>
            </>
        )
        loginActions = (
            <Navbar.Text>
                Signed in as: <a href="/">{currentUser.firstName} {currentUser.lastName}</a>
            </Navbar.Text>
        )
    }

    return (
        <Navbar className="NavBar" sticky='top' >
            <Container>
                {/* <Navbar.Brand href="#home" style={{ 'color': 'pink' }}>Oma's Tree</Navbar.Brand> */}
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={() => history("/")}>Home</Nav.Link>
                        {logedinAction}
                    </Nav>
                    {loginActions}
                    <Outlet />
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavBar