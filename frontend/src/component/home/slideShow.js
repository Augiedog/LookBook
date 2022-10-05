import Carousel from 'react-bootstrap/Carousel';

function SlideShow() {
  return (
    <Carousel style={{'width': "90%", 'align': "center"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lovinglifeathome.com/wp-content/uploads/2019/09/Grandkids.jpg"
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
          src="https://www.araglegal.com/dam/jcr:dbbccb15-06ae-40bc-9e87-f46affe5a972/Grandparents%20as%20Caregivers%20Photo.jpg"
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
          src="https://cdn.mos.cms.futurecdn.net/r3NryuQKaMBQmCHgfkgcA9.jpg"
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
  );
}

export default SlideShow;