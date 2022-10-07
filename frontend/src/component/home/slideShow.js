import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Error404 from '../Error404';

function SlideShow() {
  const [pictures, setPictures] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("192.168.0.29:5000/pictures")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPictures(result);
        }
      ).catch(
        (error) => {
          setIsLoaded(false);
          setError(error);
        })
  }, [])

  console.log("Slide Show line 24", pictures)

  if (error) {
    return <Error404 error={error.message} />
  } else if (!isLoaded) {
    return <div className='App'><h1>Loading</h1></div>
  } else {
    return (
      <Carousel style={{ 'width': "90%", 'align': "center" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }

}

export default SlideShow;