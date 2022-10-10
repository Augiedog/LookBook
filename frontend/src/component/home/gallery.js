import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    return (<><Picture photo={picture} />{console.log("can i have this", picture)}</>)
})


    if (error) {
        return <Error404 error={error.message} />
    } else if (!isLoaded) {
        return <div className='App'><h1>Loading</h1></div>
    } else {
        return (
            <Container>
                {picture}
            </Container>
        )
    }
}


export default Gallery;

// {pictures.map((picture, key) => {
//     <Picture key="key" picture="{picture}" />
//     {console.log("this is each picture", picture.fileName)}
// })}