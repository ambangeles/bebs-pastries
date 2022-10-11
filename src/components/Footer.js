import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/footer.css";

function Footer() {
	return (
		<footer>
			<Nav />
			<div className="social-media">
				<a href="https://www.facebook.com/bebs.pastries/">
					<FontAwesomeIcon icon={faFacebook} /> Facebook
				</a>
				<a href="https://www.instagram.com/bebspastries/">
					<FontAwesomeIcon icon={faInstagram} /> Instagram
				</a>
			</div>
			<p>© 2022 Bebs' Pastries. All Rights Reserved.</p>
		</footer>
	);
}

export default Footer;
