import React, { useEffect, useState } from "react";
import QuantityButton from "./QuantityButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/order.css";

function Order({ order, setOrders }) {
	const [qty, setQty] = useState(order.qty);

	useEffect(() => {
		setOrders((prev) => {
			if (prev.findIndex((obj) => obj.name === order.name) !== -1) {
				return prev.map((obj) => {
					if (obj.name === order.name) {
						return { ...obj, qty: qty };
					}
					return obj;
				});
			} else {
				return [...prev];
			}
		});
	}, [qty, order.name, setOrders]);

    function handleDelete() {
        setOrders(prev => {
            return prev.filter((obj) => obj.name !== order.name);
        })
    }

	return (
		<div className="order">
			<div className="flex-items">{order.name}</div>
			<div className="flex-items">₱{order.price}</div>
			<div className="flex-items">
				<QuantityButton qty={qty} setQty={setQty} />
			</div>
			<div className="flex-items">
				<FontAwesomeIcon className="trash" icon={faTrashCan} onClick={handleDelete} />
			</div>
		</div>
	);
}

export default Order;
