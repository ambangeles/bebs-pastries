import React, { useEffect, useState } from "react";
import "../assets/css/featured.css";
import QuantityButton from "./QuantityButton";

function Featured({ img, scroll, handleAddToCartClick, info: { name, price, desc } }) {
	const [offset, setOffset] = useState(0);
	const [qty, setQty] = useState(1);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section className="featured-section">
			<img src={img} alt="crinkle" style={offset >= scroll ? { opacity: "100%", transform: "translateX(0px)" } : {}} />
			<div style={offset >= scroll ? { opacity: "100%", transform: "translateX(0px)" } : {}}>
				<h2>
					{name}
				</h2>
				<p>{desc}</p>
				{/* <span>
					Quantity: <QuantityButton qty={qty} setQty={setQty} />
				</span>
				<button
					onClick={() => {
						handleAddToCartClick({ name, price, qty });
						setQty(1);
					}}
				>
					Add to Cart!
				</button> */}
			</div>
		</section>
	);
}

export default Featured;
