import React, { useEffect, useState } from "react";
import "../assets/css/home.css";
import Featured from "./Featured";
import Slider from "./Slider";

function Home() {
	const [resize, setResize] = useState(window.innerWidth);

	useEffect(() => {
		const onResize = () => setResize(window.innerWidth);
		window.removeEventListener("resize", onResize);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("scroll", onResize);
	}, []);
	console.log(resize);
	return (
		<>
			<Slider />
			<div id="featured-container">
				<div className="container">
					<img id="brownie-bg" src={require("../assets/img/brownieBG.png")} alt="background" />
					<h1>
						<span>Featured</span> Products
					</h1>
					<Featured
						pastry="Chocolate Crinkle Cookies"
						desc="Delicious chocolate crinkle cookies enclosed in powdered sugar."
						scroll={resize > 400 ? "10" : "150"}
						img={require("../assets/img/crinkle/crinkle2.jpg")}
					/>
					<Featured
						pastry="Banana Cake"
						desc="The best banana cake you'll ever have, topped with delicious chocolate chunks."
						scroll={resize > 400 ? "400" : "700"}
						img={require("../assets/img/banana cake/bananaCake1.jpg")}
					/>
					<Featured
						pastry="Chocolate Brownies"
						desc="Perfect crisp crackly top, super fudgy centre, chewy or gooey in all the right places, studded with melted chunks of chocolate."
						scroll={resize > 400 ? "700" : "1000"}
						img={require("../assets/img/brownie/brownie3.jpg")}
					/>
					<Featured
						pastry="Chocolate Cookies"
						desc="Slightly crispy on the outside and chewy on the inside, mixed with your favorites chocolatey goodness."
						scroll={resize > 400 ? "1000" : "1500"}
						img={require("../assets/img/cookie/cookie3.jpg")}
					/>
				</div>
			</div>
		</>
	);
}

export default Home;
