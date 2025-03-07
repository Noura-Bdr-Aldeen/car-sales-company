import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux-toolkit/slices/cart-slice';
import { useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';

const CardCar = ({ car }) => {
    const dispatch = useDispatch();
    const { isSignedIn } = useUser();


    const handleAddToCart = () => {
        if (isSignedIn) {
            dispatch(addToCart(car));
            toast.success(`${car.make} ${car.model} has been added to the cart!`);
        }
    };

    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <div
                style={{
                    backgroundImage: `url(${car.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '18rem',
                    height: '180px',
                    marginBottom: '10px',
                }}
            ></div>
            <Card.Body>
                <Card.Title>{car.make}</Card.Title>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroup.Item>{car.model}</ListGroup.Item>
                <ListGroup.Item>{car.year}</ListGroup.Item>
            </ListGroup>

            <Card.Body>
                <Link className="btn btn-primary mx-3" to={`/car-details/${car.id}`}>
                    More info
                </Link>
                <Button
                    variant="primary"
                    onClick={handleAddToCart}
                    disabled={!isSignedIn}
                >
                    Add to cart
                </Button>
                {!isSignedIn && (
                    <p className="mt-2 text-danger">Sign in to add to cart</p>
                )}
            </Card.Body>
        </Card>
    );
};

export default CardCar;