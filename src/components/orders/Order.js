import React, {Fragment} from 'react';

const Order = ({order}) => {

  if (!order){
    return "Loading..."
  }
  return (
    <Fragment>
    <p>Date: {order.date}</p>
    <p>Items: {order.items}</p>
    <p>Meals: {order.meals}</p>
    <p>Order Id: {order.orderId}</p>
    <p>Price: {order.price}</p>
    <p>Quantity: {order.quantity}</p>
    <p>Sub total: {order.subtotal}</p>
    </Fragment>
  )
}

export default Order;
