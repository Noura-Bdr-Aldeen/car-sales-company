import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../redux-toolkit/slices/cart-slice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, car) => {
    acc += car.price * car.quantity;
    return acc
  }, 0)


  return (
    <Container className='mb-5 pb-5'>
      <h1 className='py-5'>Welcome to cart</h1>
      <div className='d-flex justify-content-between'>
        <h5><span className='text-danger'>Total Price : </span>{totalPrice.toFixed(2)}$</h5>
        <Button variant='primary' onClick={() => dispatch(clear())} className='mb-4'>CLEAR</Button></div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Make</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td><Image src={car.image} alt={car.make} style={{ height: "100px", width: "100px" }} /></td>
              <td>{car.price}$</td>
              <td>{car.quantity}</td>
              <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(car))}>Delete</Button></td>
            </tr>
          ))
          }
        </tbody>
      </Table>
    </Container>
  )
}

export default Cart
