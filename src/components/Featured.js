import React, { useEffect, useState } from "react";
import "../assets/css/featured.css";

function Featured(props) {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	console.log(offset);

	return (
		<section>
			<img src={props.img} alt="crinkle" style={offset >= props.scroll ? { opacity: "100%", transform: "translateX(0px)" } : {}} />
			<div style={offset >= props.scroll ? { opacity: "100%", transform: "translateX(0px)" } : {}}>
				<h2>{props.pastry}</h2>
				<p>{props.desc}</p>
				<a href="/">Order Now!</a>
			</div>
		</section>
	);
}

export default Featured;
