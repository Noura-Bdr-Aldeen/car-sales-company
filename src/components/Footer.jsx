import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { carImageUrls } from "../../data"


const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <Container fluid className="p-4">
                <section>
                    <Row>
                        {carImageUrls.map((url, index) => (
                            <Col lg={2} md={12} className="mb-4 mb-md-0" key={index}>
                                <div className="bg-image hover-overlay shadow-1-strong rounded">
                                    <Image src={url} fluid />
                                    <a href="#!">
                                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                    </a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>

            <div className="text-center p-2 bg-black">
                <p className="text-light">© 2025 Copyright : NOURA BDR ALDEEN</p>
            </div>
        </footer>
    );
}

export default Footer;