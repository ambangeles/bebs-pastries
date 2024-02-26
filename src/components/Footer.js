import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import "../assets/css/footer.css";

function Footer({ cartNo }) {
	return (
		<footer>
			<Nav nav={"footer"} cartNo={cartNo} />
			<div className="social-media">
				<h3>Follow Us</h3>
				<a href="https://www.facebook.com/bebs.pastries/">
					<FontAwesomeIcon icon={faFacebook} /> Facebook
				</a>
				<a href="https://www.instagram.com/bebspastries/">
					<FontAwesomeIcon icon={faInstagram} /> Instagram
				</a>
			</div>
			<div className="contact">
				<h3>Contact Us</h3>
				<a href="tel:+639274959914">+639274959914</a>
			</div>
			<p>© 2022 Bebs' Pastries. All Rights Reserved.</p>
		</footer>
	);
}

export default Footer;
