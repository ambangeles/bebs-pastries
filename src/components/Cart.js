import React from "react";
import "../assets/css/cart.css";
import Modal from "./Modal";
import Order from "./Order";

function Cart({ orders, setOrders }) {
	return (
		<div className="container c-container">
			<h1>
				<span>Pastry</span> Cart
			</h1>
			<div className="title">
				<div className="flex-items">Product</div>
				<div className="flex-items">Price</div>
				<div className="flex-items">Quantity</div>
				<div className="flex-items">Actions</div>
			</div>
			<div className="orders">
				{orders.map((order) => {
					return <Order key={order.name} order={order} setOrders={setOrders} />;
				})}
			</div>
			<div className="cart-footer">
				<p>
					Total Price: ₱
					{orders.reduce((a, b) => {
						return a + b.price * b.qty;
					}, 0)}
				</p>
				<Modal name="Check Out" />
				{/* <button onClick={()=> {setOrders([])}}>Check Out</button> */}
			</div>
		</div>
	);
}

export default Cart;
