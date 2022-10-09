import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Error404 from '../Error404';

function SlideShow() {
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

  // console.log("API call", pictures)

  let pictureCarousel = pictures.map((picture) => {
    return (
      <Carousel.Item key={picture.fileName}>
        <img
          className="d-block w-100"
          src={picture.picUrl}
          alt={picture.fileName}
        />
        <Carousel.Caption>
          <h3>{picture.description}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })

  if (error) {
    return <Error404 error={error.message} />
  } else if (!isLoaded) {
    return <div className='App'><h1>Loading</h1></div>
  } else {
    return (
      <Container>
        <Carousel>
          {pictureCarousel}
        </Carousel>
      </Container>
    )
  }
}

export default SlideShow;