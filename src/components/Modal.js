import React, { useState } from "react";
import "../assets/css/modal.css";
function Modal({ name }) {
	const [modal, setModal] = useState(false);

	function handleToggle() {
		setModal(!modal);
		document.documentElement.classList.toggle("active-modal");
		document.body.classList.toggle("active-modal");
	}

	return (
		<div className="modal-container">
			<button className="btn-modal" onClick={handleToggle}>
				{name}
			</button>
			{modal && (
				<div className="modal">
					<div className="overlay" onClick={handleToggle}></div>
					<div className="modal-content">
						<h1>
							<span>Check</span>out
						</h1>
						<form action="/cart" method="get">
							<label>
								First Name: <input type="text" />
							</label>
							<label>
								Last Name: <input type="text" />
							</label>
							<label>
								Address: <input type="text" />
							</label>
							<label>
								Contact Number: <input type="text" />
							</label>
							<label>
								Request: <textarea name=""></textarea>
							</label>
							<input type="submit" value="Place Order" />
						</form>
						<button className="close-modal" onClick={handleToggle}>
							X
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Modal;
