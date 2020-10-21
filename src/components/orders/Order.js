import React, {Fragment} from 'react';

const Order = ({order}) => {

  if (!order){
    return "Loading..."
  }
  return (
    <Fragment>
    <p>Item: {order.items}</p>
    <p>Meal: {order.meals}</p>
    <p>Price: {order.price}</p>
    <p>Quantity: {order.quantity}</p>
    <p>SubTotal: {order.subTotal}</p>
    </Fragment>
  )
}

export default Order;
