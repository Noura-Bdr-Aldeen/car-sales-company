import "./CardMostWantedCar.css"
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"

const CardMostWantedCar = ({ car }) => {
    return (
        <Container className="py-4">
            <div class="card-car">
                <div class="card-car-details">
                    <Link to={`/car-details/${car.id}`}>
                        <div style={{
                            backgroundImage: `url(${car.image})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            width: "250px",
                            height: "180px",
                            marginBottom: "10px"
                        }}></div>
                    </Link>
                    <p class="text-title">{car.make}</p>
                    <p class="text-body">{car.model}</p>
                    <p class="text-body">{car.engine}</p>
                </div>
                <Link to={`/car-details/${car.id}`}><button class="card-car-button">More info</button></Link>
            </div>
        </Container>
    )
}

export default CardMostWantedCar
