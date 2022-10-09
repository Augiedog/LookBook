import { Container } from "react-bootstrap";

function Error404(props) {
    console.log(props)
    return (
        <Container>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <p>Error ${props.error}</p>
            <img src={process.env.REACT_APP_API + "/kittykat.jpeg"} alt="cute cat pic" width="85%" />
        </Container>
    );
}

export default Error404;
