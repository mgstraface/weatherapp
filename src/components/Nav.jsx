import React from "react";
import Home from "../images/home.jpg";
import Acerca from "../images/acerca.jpg";
import SearchBar from "./SearchBar.jsx";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<span className="navbar-brand">
				<Link to="/">
					<img id="home" src={Home} alt="img not found" />
				</Link>
				<Link to="/about">
					<img id="about" src={Acerca} alt="img not found" />
				</Link>
			</span>
			<SearchBar onSearch={onSearch} />
		</nav>
	);
}

export default Nav;
