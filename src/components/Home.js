import React, { useEffect, useState } from "react";
import "../assets/css/home.css";
import Featured from "./Featured";
import Slider from "./Slider";

function Home({ handleAddToCartClick }) {
	const [resize, setResize] = useState(window.innerWidth);

	useEffect(() => {
		const onResize = () => setResize(window.innerWidth);
		window.removeEventListener("resize", onResize);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("scroll", onResize);
	}, []);

	return (
		<div className="home-container">
			<Slider />
			<img id="brownie-bg" src={require("../assets/img/brownieBG.png")} alt="background" />
			<div className="container">
				<h1>
					<span>Featured</span> Products
				</h1>
				<Featured
					info={{
						name: "Chocolate Crinkle",
						price: 170,
						desc: "Delicious chocolate crinkle cookies enclosed in powdered sugar.",
					}}
					scroll={resize > 400 ? "10" : "150"}
					img={require("../assets/img/crinkle/crinkle1.jpg")}
					handleAddToCartClick={handleAddToCartClick}
				/>
				<Featured
					info={{
						name: "Banana Cake",
						price: 170,
						desc: "The best banana cake you'll ever have, topped with delicious chocolate chunks.",
					}}
					scroll={resize > 400 ? "400" : "700"}
					img={require("../assets/img/banana cake/bananaCake1.jpg")}
					handleAddToCartClick={handleAddToCartClick}
				/>
				<Featured
					info={{
						name: "Chocolate Brownie",
						price: 170,
						desc: "Perfect crisp crackly top, super fudgy centre, chewy or gooey in all the right places, studded with melted chunks of chocolate.",
					}}
					scroll={resize > 400 ? "700" : "1000"}
					img={require("../assets/img/brownie/brownie3.jpg")}
					handleAddToCartClick={handleAddToCartClick}
				/>
				<Featured
					info={{
						name: "Chocolate Cookie",
						price: 170,
						desc: "Slightly crispy on the outside and chewy on the inside, mixed with your favorites chocolatey goodness.",
					}}
					scroll={resize > 400 ? "900" : "1500"}
					img={require("../assets/img/cookie/cookie1.jpg")}
					handleAddToCartClick={handleAddToCartClick}
				/>
			</div>
		</div>
	);
}

export default Home;
