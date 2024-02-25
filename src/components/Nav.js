import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Nav({ cartNo, nav }) {
	const location = useLocation();
	const [url, setUrl] = useState("");
	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);
	return (
		<nav>
			<Link to="/" className={url === "/" ? "active" : ""}>
				Home
			</Link>
			<Link to="/about" className={url === "/about" ? "active" : ""}>
				About
			</Link>
			<Link to="/products" className={url === "/products" ? "active" : ""}>
				Products
			</Link>
			{/* {nav !== "footer" ? (
				<Link to="/cart" className={url === "/cart" ? "active" : ""}>
					<div className="cart-container">
						<FontAwesomeIcon icon={faCartShopping} />
						<span className={url === "/cart" ? "active-cart" : ""}>{cartNo}</span>
					</div>
				</Link>
			) : (
				<Link to="/cart" className={url === "/cart" ? "active" : ""}>
					<div className="cart-container">
						<FontAwesomeIcon icon={faCartShopping} />
						<span className={url === "/cart" ? "active-cart" : ""}>{cartNo}</span>
					</div> Cart
				</Link>
			)} */}
		</nav>
	);
}

export default Nav;
