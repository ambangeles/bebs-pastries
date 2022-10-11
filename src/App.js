import "./App.css";
import Navbar from "./components/Navbar.js";
import "./assets/css/normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/about" element={<About />}></Route>
				<Route exact path="/products" element={<Products />}></Route>
			</Routes>
			<Footer/>
		</Router>
	);
}

export default App;
