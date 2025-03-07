import { Col, Container, Row } from 'react-bootstrap'
import { apiCars } from '../../../data'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import CardMostWantedCar from './CardMostWantedCar';

const MostWantedCar = () => {
    const mostWantedCars = apiCars.slice(0, 6);

    return (
        <Container>
            <Row>
                <div className='d-grid justify-content-center'>
                    <h2 className='pt-5 text-center text-success'>Most wanted
                        <span className='px-2'><IoCheckmarkDoneSharp /></span>
                    </h2>
                </div>
                {mostWantedCars.map((car) => (
                    <Col key={car.id}>
                        <CardMostWantedCar car={car} />
                    </Col>
                ))}
            </Row>
        </Container>


    )
}

export default MostWantedCar
