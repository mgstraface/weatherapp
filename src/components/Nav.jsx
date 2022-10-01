import React from "react";
import Home from "../images/home.jpg";
import Acerca from "../images/acerca.jpg";
import SearchBar from "./SearchBar.jsx";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand">
					<img id="home" src={Home} alt="img not found" />
				</span>
			</Link>
			<Link to="/about">
				<span>
					<img id="about" src={Acerca} alt="img not found" />
				</span>
			</Link>
			<SearchBar onSearch={onSearch} />
		</nav>
	);
}

export default Nav;
