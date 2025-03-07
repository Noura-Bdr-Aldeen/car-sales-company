import React from 'react';
import { Container, Row, Col, Carousel, Button, Card } from 'react-bootstrap';
import './CarReviews.css';
import { reviews } from "../../../data"

const CarReviews = () => {

    return (
        <Container className="car-reviews-container py-5 mt-5">
            <h2 className="text-center mb-5">Get car reviews from our experts</h2>
            <Carousel
                indicators={false}
                prevIcon={<span aria-hidden="true" className="carousel-arrow-prev" />}
                nextIcon={<span aria-hidden="true" className="carousel-arrow-next" />}
            >
                {reviews.map((review) => (
                    <Carousel.Item key={review.id}>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <Card className="car-review-card">
                                    <Card.Img
                                        variant="top"
                                        src={review.image}
                                        alt={review.title}
                                        className="car-review-image"
                                    />
                                    <Card.Body className="text-center">
                                        <Card.Title>{review.title}</Card.Title>
                                        <div className="d-flex align-items-center justify-content-center mt-3">
                                            <img
                                                src={review.authorImage}
                                                alt={review.author}
                                                className="author-image"
                                            />
                                            <span className="ms-2">by {review.author}</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="text-center mt-5">
                <Button className='px-5' variant="secondary" href="#">
                    See all
                </Button>
            </div>
        </Container>
    );
};

export default CarReviews;