import React from 'react';
import Order from './Order.js';


const OrderList = (props) => {

	if (props.orders.length === 0){
		return <p>Loading...</p>
	}

	const orderItems = props.orders.map(order => {
		return (
			<li key={order.id} className="component-item">
			<div className="component">
				<Order order={order}/>
			</div>
			</li>
		)

	});


	return (
		<ul className="component-list">
			{orderItems}
   		</ul>

	)
}
 export default OrderList;
