import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TransparentPricing from "../assets/images/transparent-pricing.svg"
import ShopYourWay from "../assets/images/shop-your-way.svg"
import MinutesNotHours from "../assets/images/minutes-not-hours.svg"


const WhyTrueCar = () => {
    return (
        <div className="mt-4 py-5 text-center bg-black text-white">
            <Container>
                <h2 className="h2 pt-3 pb-5 text-light">Why TrueCar?</h2>
                <Row>
                    <Col md={4}>
                        <Card className="bg-black text-light">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-start py-5 px-2">
                                <div className="mb-3">
                                    <img alt="" src={TransparentPricing} />
                                </div>
                                <h3 className="h3 pb-3">Transparent pricing</h3>
                                <p className="px-4">No surprises here. See how much you'll pay on cars you like.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-black text-light">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-start py-5 px-2">
                                <div className="mb-3">
                                    <img alt="" src={MinutesNotHours} />
                                </div>
                                <h3 className="h3 pb-3">Minutes, not hours</h3>
                                <p className="px-4">Time saving tools to help you find the right car in a snap.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-black text-light">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-start py-5 px-2">
                                <div className="mb-3">
                                    <img alt="" src={ShopYourWay} />
                                </div>
                                <h3 className="h3 pb-3">Shop your way</h3>
                                <p className="px-4">Your own pace, your own space. Shop online where and when it's convenient for you.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyTrueCar;