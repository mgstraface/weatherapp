import React from "react";
import AboutImg from "../images/about.png";
import LinkedIn from "../images/linkedIn.png";
import GitHub from "../images/github.png";
import "../Styles/About.css";

export default function About() {
	return (
		<div className="containerAbout">
			<div className="about">
				<img src={AboutImg} alt="About img" />
			</div>
			<div className="contacto">
				<a
					href="https://www.linkedin.com/in/matías-straface-369a66238/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={LinkedIn} alt="LinkedIn" />
				</a>
				<a href="https://github.com/mgstraface" target="_blank" rel="noreferrer">
					<img src={GitHub} alt="Github" />
				</a>
			</div>
		</div>
	);
}
