import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux-toolkit/slices/cars-slice';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import CardCar from './CardCar';
import Spinner from '../Spinner';

const AllCars = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars.cars); // Access state.cars.cars
    const loading = useSelector((state) => state.cars.loading);

    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(3);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cars.length / carsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Container className="py-5">
            {loading ? (
                <Spinner loading={loading} />
            ) : (
                <>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {currentCars.map((car) => (
                            <Col key={car.id}>
                                <CardCar car={car} />
                            </Col>
                        ))}
                    </Row>

                    <Row className="mt-4">
                        <Col className="d-flex justify-content-center">
                            <Pagination>
                                {pageNumbers.map((number) => (
                                    <Pagination.Item
                                        key={number}
                                        active={number === currentPage}
                                        onClick={() => paginate(number)}
                                    >
                                        {number}
                                    </Pagination.Item>
                                ))}
                            </Pagination>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
};

export default AllCars;