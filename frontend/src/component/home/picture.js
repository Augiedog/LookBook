import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Picture({ picture }) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Card className="Picture" onClick={handleShow} >
                <Card.Img variant="top" src={picture.picUrl} />
                <Card.Body>
                    <Card.Title>{picture.description}</Card.Title>
                    <Card.Text>{picture.fileName}</Card.Text>
                </Card.Body>
            </Card>

            <Modal size="lg" show={show}>
                <Modal.Header closeButton={handleClose} >
                    <Modal.Title>{picture.description}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><b>File Name:</b> {picture.fileName}</p>
                    <p><b>Upload Date:</b> {picture.createdAt}</p>
                    <p><b>Posted By:</b> {picture.authorId}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>Edit</Button>
                    <Button variant="secondary" onClick={handleClose}>Share</Button>
                    <Button variant="info" onClick={handleClose}>Print</Button>
                    <Button variant="success" onClick={handleClose}>  Ok  </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Picture;