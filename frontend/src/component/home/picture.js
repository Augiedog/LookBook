import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Picture({ props }) {
    console.log("are we here", {props})
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>{console.log("HELLS YEAH", props)}
            <Card onClick={handleShow} >
                <Card.Img variant="top" src={props} />
                <Card.Body>
                    <Card.Title>{props}</Card.Title>
                    <Card.Text>{props}</Card.Text>
                </Card.Body>
            </Card>

            <Modal size="lg" show={show} onClick={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><b>File Name:</b> {props}</p>
                    <p><b>Upload Date:</b> {props}</p>
                    <p><b>Posted By:</b> {props}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" >Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Picture;