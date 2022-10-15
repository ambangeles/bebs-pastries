import React from "react";
import "../assets/css/quantity-button.css";
function QuantityButton({ qty, setQty }) {
	return (
		<div className="quantity-button">
			<button onClick={() => setQty((prev) => prev - 1)} disabled={qty <= 1}>
				-
			</button>
			<div>{qty}</div>
			<button onClick={() => setQty((prev) => prev + 1)}>+</button>
		</div>
	);
}

export default QuantityButton;