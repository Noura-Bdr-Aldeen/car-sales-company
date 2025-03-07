import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { apiCars } from '../../../data';
import './carDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const selectedCar = apiCars.find(car => car.id === parseInt(id));
    setCar(selectedCar);
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="car-details-card shadow-lg">
            <div className="car-image-wrapper">
              <Card.Img
                variant="top"
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="car-image"
              />
              <div className="car-overlay">
                <h2 className="car-title">
                  {car.make} {car.model}
                </h2>
                <Badge bg="light" text="dark" className="car-year">
                  {car.year}
                </Badge>
              </div>
            </div>

            <Card.Body className="car-details-body">
              <Row>
                <Col md={6}>
                  <ListGroup variant="flush" className="car-specs">
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Color</span>
                      <span className="text-muted">{car.color}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Mileage</span>
                      <span className="text-muted">{car.mileage} miles</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Price</span>
                      <span className="text-muted">${car.price.toLocaleString()}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Fuel Type</span>
                      <span className="text-muted">{car.fuelType}</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <ListGroup variant="flush" className="car-specs">
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Transmission</span>
                      <span className="text-muted">{car.transmission}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Engine</span>
                      <span className="text-muted">{car.engine}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Horsepower</span>
                      <span className="text-muted">{car.horsepower} HP</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Owners</span>
                      <span className="text-muted">{car.owners}</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>

              <div className="mt-4 mb-4">
                <h5 className="text-center mb-4">Features</h5>
                <Row className=''>
                  {car.features.map((feature, index) => (
                    <Col key={index} xs={6} md={4}>
                      <div bg="primary" className="feature-badge">
                        {feature}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CarDetails;