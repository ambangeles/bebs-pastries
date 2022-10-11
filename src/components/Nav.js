import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/nav.css";

function Nav() {
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
		</nav>
	);
}

export default Nav;
