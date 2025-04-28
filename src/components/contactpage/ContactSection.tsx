import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #a259ff;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_9lb3c6g',
        'template_84sm6uy',
        formData,
        'XPZsj7y5jwwJ8tYMf'
      )
      .then(
        (result: { text: string }) => {
          console.log(result.text);
          setAlertMessage("Message Sent Successfully!");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000); // Display for 3 seconds
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error: { text: string }) => {
          console.error(error.text);
          setAlertMessage("An error occurred, please try again.");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000); // Display for 3 seconds
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#0D1117", color: "#ffffff" }}>
      <Row className="justify-content-center">
        <Col lg={8}>
          {showAlert && (
            <Alert
              variant="success"
              className="position-fixed top-0 end-0 m-3 shadow bg-dark text-white border-2 border-white"
              style={{ zIndex: 1050 }}
              onClose={() => setShowAlert(false)} 
              dismissible
            >
              <style>
                {`
                  .btn-close {
                    filter: invert(1) grayscale(100%) brightness(200%);
                  }
                `}
              </style>
              {alertMessage}
            </Alert>
          )}
          <h2 className="text-center mb-4">Let's Connect</h2>
          <p className="text-center mb-5">Get in touch for opportunities or just to say hello</p>
          <Row>
            <Col md={5} className="mb-4 d-none d-md-block">
              <h5 className="mb-3">Contact Details</h5>
              <p><i className="bi bi-envelope me-2"></i> <StyledLink href="mailto:anjali7185821@gmail.com">anjali7185821@gmail.com</StyledLink></p>
              <p><i className="bi bi-geo-alt me-2"></i> <StyledLink href="https://www.google.com/maps?q=Dhanbad,+Jharkhand" target="_blank" rel="noopener noreferrer">Dhanbad, Jharkhand</StyledLink></p>

              <h5 className="mt-4 mb-3">Connect With Me</h5>
              <div className="d-flex gap-3">
                <style>
                  {`
                    .btn-dark:hover {
                      background-color: #a259ff !important;
                      border-color: #a259ff !important;
                    }
                  `}
                </style>
                <a href="https://www.linkedin.com/in/anjali-singh-51a24b234" className="btn btn-dark rounded-circle">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/anjali7185821" className="btn btn-dark rounded-circle">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://x.com/anjali7185821" className="btn btn-dark rounded-circle">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </Col>
            <Col md={7}>
              <Form onSubmit={handleSubmit}>
                <style>
                  {`
                    .form-control::placeholder {
                      color: #6c757d !important;
                      opacity: 1;
                    }
                    .form-control:focus {
                      border-color: #a259ff !important;
                      box-shadow: 0 0 0 0.25rem rgba(108, 43, 217, 0.25) !important;
                    }
                  `}
                </style>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="name"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-dark text-white border-0"
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-dark text-white border-0"
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject of your message"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border-0"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Write your message here..."
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border-0"
                  />
                </Form.Group>
                <div>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100"
                    style={{ backgroundColor: '#a259ff', borderColor: '#a259ff' }}
                    disabled={!formData.name || !formData.email || !formData.subject || !formData.message || loading}
                  >
                    {loading ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <i className="bi bi-send ms-2"></i></>
                    )}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;