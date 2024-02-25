import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import "./assets/css/normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
	const [orders, setOrders] = useState([]);
	
	function handleAddToCartClick(pastry) {
		setOrders((prev) => {
			if (prev.length > 0 && prev.findIndex((obj) => obj.name === pastry.name) !== -1) {
				return prev.map((obj) => {
					if (obj.name === pastry.name) {
						return { ...obj, qty: obj.qty + pastry.qty };
					}
					return obj;
				});
			} else {
				return [...prev, pastry];
			}
		});
	}

	return (
		<Router>
			<Navbar cartNo={orders.length} orders={orders} />
			<Routes>
				<Route exact path="/" element={<Home handleAddToCartClick={handleAddToCartClick} />}></Route>
				<Route exact path="/about" element={<About />}></Route>
				<Route exact path="/products" element={<Products handleAddToCartClick={handleAddToCartClick} />}></Route>
				{/* <Route exact path="/cart" element={<Cart orders={orders} setOrders={setOrders} />}></Route> */}
			</Routes>
			<Footer cartNo={orders.length} />
		</Router>
	);
}

export default App;
