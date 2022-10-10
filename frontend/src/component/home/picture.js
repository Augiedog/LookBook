import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Picture(props) {
    console.log("are we here", props)
    // const [show, setShow] = useState(false)
    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)
    return (<>picture</>)
    //     <>{console.log("here I come", props)}
    //         <Card onClick={handleShow} >
    //             <Card.Img variant="top" src={picture.picUrl} />
    //             <Card.Body>
    //                 <Card.Title>{picture.description}</Card.Title>
    //                 <Card.Text>{picture.authorId}</Card.Text>
    //             </Card.Body>
    //         </Card>

    //         <Modal size="lg" show={show} onClick={handleClose}>
    //             <Modal.Header closeButton>
    //                 <Modal.Title>{picture.description}</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <p><b>File Name:</b> {picture.fileName}</p>
    //                 <p><b>Release Date:</b> {picture.updatedAt}</p>
    //                 <p><b>Posted By:</b> {picture.authorId}</p>
    //             </Modal.Body>
    //             <Modal.Footer>
    //                 <Button variant="secondary" onClick={handleClose}>Close</Button>
    //                 <Button variant="primary" >Save Changes</Button>
    //             </Modal.Footer>
    //         </Modal>
    //     </>
    // )
}

export default Picture;