import React from "react";
import Card from "./Card";
import "../assets/css/products.css";

function Products({ handleAddToCartClick }) {
	return (
		<div className="container products-container">
			<h1>
				<span>Our</span> Products
			</h1>
			<div className="cards">
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Cake",
						price: 800,
					}}
					img={[
						require("../assets/img/cake/cake1.jpg"),
						require("../assets/img/cake/cake2.jpg"),
						require("../assets/img/cake/cake3.jpg"),
						require("../assets/img/cake/cake4.jpg"),
						require("../assets/img/cake/cake5.jpg"),
						require("../assets/img/cake/cake6.jpg"),
						require("../assets/img/cake/cake7.jpg"),
						require("../assets/img/cake/cake8.jpg"),
						require("../assets/img/cake/cake9.jpg"),
						require("../assets/img/cake/cake10.jpg"),
						require("../assets/img/cake/cake11.jpg"),
						require("../assets/img/cake/cake12.jpg"),
						require("../assets/img/cake/cake13.jpg"),
						require("../assets/img/cake/cake14.jpg"),
						require("../assets/img/cake/cake15.jpg"),
					]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Brownie",
						price: 170,
					}}
					img={[
						require("../assets/img/brownie/brownie1.jpg"),
						require("../assets/img/brownie/brownie2.jpg"),
						require("../assets/img/brownie/brownie3.jpg"),
						require("../assets/img/brownie/brownie4.jpg"),
					]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Banana Cake",
						price: 170,
					}}
					img={[require("../assets/img/banana cake/bananaCake1.jpg"), require("../assets/img/banana cake/bananaCake2.jpg")]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Cookie",
						price: 170,
					}}
					img={[
						require("../assets/img/cookie/cookie1.jpg"),
						require("../assets/img/cookie/cookie2.jpg"),
						require("../assets/img/cookie/cookie3.jpg"),
						require("../assets/img/cookie/cookie4.jpg"),
					]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Cheesecake",
						price: 250,
					}}
					product="Cheesecake"
					img={[require("../assets/img/cheesecake/cheesecake1.jpg"), require("../assets/img/cheesecake/cheesecake2.jpg"), require("../assets/img/cheesecake/cheesecake3.jpg")]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Crinkle",
						price: 170,
					}}
					img={[require("../assets/img/crinkle/crinkle1.jpg"), require("../assets/img/crinkle/crinkle2.jpg")]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Empanada",
						price: 200,
					}}
					img={[require("../assets/img/empanada/empanada1.jpg"), require("../assets/img/empanada/empanada2.jpg"), require("../assets/img/empanada/empanada3.jpg")]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Sansrival",
						price: 800,
					}}
					img={[require("../assets/img/sansrival/sansrival1.jpg"), require("../assets/img/sansrival/sansrival2.jpg"), require("../assets/img/sansrival/sansrival3.jpg")]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Cupcake",
						price: 600,
					}}
					img={[
						require("../assets/img/cupcake/cupcake1.jpg"),
						require("../assets/img/cupcake/cupcake2.jpg"),
						require("../assets/img/cupcake/cupcake3.jpg"),
						require("../assets/img/cupcake/cupcake4.jpg"),
						require("../assets/img/cupcake/cupcake5.jpg"),
					]}
				/>
				<Card
					handleAddToCartClick={handleAddToCartClick}
					info={{
						name: "Egg pie",
						price: 500,
					}}
					img={[require("../assets/img/egg pie/egg pie1.PNG"), require("../assets/img/egg pie/egg pie2.jpg"), require("../assets/img/egg pie/egg pie3.jpg")]}
				/>
			</div>
		</div>
	);
}

export default Products;
