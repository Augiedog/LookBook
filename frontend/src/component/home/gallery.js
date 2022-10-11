import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Error404 from '../Error404';
import Picture from './picture';

function Gallery() {
    const [pictures, setPictures] = useState([])

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(process.env.REACT_APP_API + `/pictures`).then(async res => {
            try {
                const data = await res.json()
                setPictures(data)
                setIsLoaded(true)
            } catch (error) {
                setIsLoaded(false);
                setError(error);
            }
        })
    }, [isLoaded])

    console.log("API call for pictures", pictures)

    let picture = pictures.map((picture) => {
        return (<Picture key={picture.fileName} picture={picture} />)
    })

    if (error) {
        return <Error404 error={error.message} />
    } else if (!isLoaded) {
        return <div className='App'><h1>Loading</h1></div>
    } else {
        return (
            <Container className='Gallery'>
                {picture}
            </Container>
        )
    }
}

export default Gallery;