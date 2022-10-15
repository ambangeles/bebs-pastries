import React from "react";
import "../assets/css/about.css";

function About() {
	return (
		<div className="container about-container">
			<h1>
				<span>Our</span> Story
			</h1>
			<section>
				<div></div>
				<p>
					Bebs' Pastries started as a hobby of a mother and daughter. Our first product is a banana cake, not baked, but cooked using a steamer. Back then, we didn't have an oven to bake
					pastries so our only solution was to bake them using steam. The next solution we had was using an improvised oven using rice cooker pots. This resulted in better-baked pastries,
					thus, we decided to sell some. The products we sold were our delicious banana cake and chocolate crinkles in Pagasa seaside park. A lot of people liked our pastries and we sold all
					of them. This encourages us to buy an actual oven and continue this business of ours.
				</p>
			</section>
			<section>
				<p>
					Now, we are still up and running, continuously growing our small business/hobby, and offer a variety of pastries, from cookies to even cakes! We even had our first anniversary last
					November 1, 2021, and we are still baking your cravings!
				</p>
			</section>
			<div id="logo-container">
				<img id="logo" src={require("../assets/img/logo.png")} alt="logo" />
			</div>
		</div>
	);
}

export default About;
