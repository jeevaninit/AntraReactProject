import Carousel from 'react-bootstrap/Carousel';

function BoostrapBanner() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://3c5239fcccdc41677a03-1135555c8dfc8b32dc5b4bc9765d8ae5.ssl.cf1.rackcdn.com/22-11-22-BANS-advertising-banner-1025x325-riot.jpg"
          alt="First slide"
         style={{height:'400px'}}/>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2024/03/1eb9670d-7e0b-4959-a207-edf0d55de5ec.png"
          alt="Second slide" style={{height:'400px'}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.commerceplatform.services/images/banner_article.agw.jpg"
          alt="Third slide" style={{height:'400px'}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BoostrapBanner;