import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import "../assets/css/card.css";
import QuantityButton from "../components/QuantityButton";

function Card({ img, handleAddToCartClick, info: { name, price } }) {
	const [qty, setQty] = useState(1);
	return (
		<div className="card-container">
			<Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
				{img.map((img, i) => {
					return (
						<SwiperSlide key={i}>
							<img src={img} alt="product" />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div>
				<h2>{name}</h2>
				{/* <QuantityButton qty={qty} setQty={setQty} />
				<button
					id="product-button"
					onClick={() => {
						handleAddToCartClick({ name, price, qty });
						setQty(1);
					}}
				>
					Add to Cart!
				</button> */}
			</div>
		</div>
	);
}

export default Card;
