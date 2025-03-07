import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { brands } from '../../data';

const BrandSection = () => {
    return (
        <Container className="py-5 px-3 text-center">
            <h2 className="pt-3">Shop your favorite brand</h2>
            <Row className="mt-5">
                {brands.map((brand, index) => (
                    <Col key={index} xs={12} md={3} lg={2} sm={6} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Body className="d-flex flex-column align-items-center">
                                <img src={brand.logo} alt={brand.name} className="img-fluid mb-2" style={{ width: '66px', height: '33px' }} />
                                <Card.Text>{brand.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <p className="text-muted mt-3">
                *Vehicle incentives and rebates are programs made available by car manufacturers to encourage vehicle sales by providing consumers with cash allowances or favorable financing/lease rates. Incentives can vary by location, vehicle configuration, as well as the buyer's method of payment (cash purchase, financing, lease). Some incentives can be stacked with other incentive programs, and some have eligibility conditions that must be met to qualify. Additional incentives are sometimes targeted to customer segment groups like college graduates, military members, etc. Incentives are normally subject to change and governed by specific eligibility rules. Please see your local dealer for details on incentives that might be available to you.
            </p>
        </Container>
    );
};

export default BrandSection;