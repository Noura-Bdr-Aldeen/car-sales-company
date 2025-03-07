import React, { useState } from 'react';
import useGetUsers from '../../hook/useGetUsers';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Opinions.css';

const Opinions = () => {
    const { data: people, isLoading, error } = useGetUsers();
    const [visibleOpinions, setVisibleOpinions] = useState(4);

    if (isLoading) {
        return <div className="text-center my-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-center my-5">Error: {error.message}</div>;
    }

    // Function to toggle between showing more or fewer opinions
    const toggleOpinions = () => {
        if (visibleOpinions === 4) {
            setVisibleOpinions(people.length); // Show all opinions
        } else {
            setVisibleOpinions(4); // Show only 4 opinions
        }
    };

    return (
        <div style={{
            backgroundColor: "#f8f9fa",
            maxWidth: "100vw",
            margin: "20px 0px",
            padding: "10px 0px"
        }}>
            <Container className="opinions-container my-5">
                <Row className="mb-4">
                    <h2 className="text-center">What People Are Saying</h2>
                </Row>
                <Row>
                    {people?.slice(0, visibleOpinions).map((person) => (
                        <Col key={person.id} md={6} lg={3} className="mb-4">
                            <div className="opinion-card p-4">
                                <h5 className="opinion-name">{person.name}</h5>
                                <p className="opinion-email">{person.email}</p>
                                <p className="opinion-phone">{person.phone}</p>
                                <p className="opinion-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi magni iusto soluta blanditiis exercitationem corrupti non incidunt voluptates. Esse reiciendis quos ducimus tempora ex voluptatem mollitia voluptatum rerum deleniti.
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className="text-center mt-4">
                    {people.length > 4 && (
                        <Button variant="outline-primary" onClick={toggleOpinions}>
                            {visibleOpinions === 4 ? 'Show More' : 'Show Less'}
                        </Button>
                    )}
                </Row>
            </Container>
        </div>

    );
};

export default Opinions;