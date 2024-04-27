import "./Contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Get In Touch</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            pariatur qui quos aspernatur, voluptatem autem possimus esse quo
            consequatur omnis, soluta consectetur ullam ipsum cum!
          </p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center">
        <Form id="contact-form">
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We&aposll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Your address" />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control placeholder="Postcode" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="danger btn-lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Locations</h2>
          <div className="row g-4">
            <div className="col-lg-8 offset-lg-2">
              <div className="location-section d-flex flex-column align-items-center">
                <div className="map-container">
                  <iframe
                    className="map"
                    title="London Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3424442257024!2d103.6352419757444!3d1.5584734608681465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7154a58c424b%3A0x8c133d77584b5ff8!2sUniversiti%20Teknologi%20Malaysia!5e0!3m2!1sen!2seg!4v1714252000989!5m2!1sen!2seg"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
