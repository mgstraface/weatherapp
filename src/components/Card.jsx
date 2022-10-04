/* eslint-disable react/style-prop-object */
import React from "react";
import "../Styles/Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
	return (
		<div className="conTotal">
			<div className="card">
				<div id="closeIcon" className="row">
					<button id="closeButton" onClick={onClose} className="btn btn-sm btn-danger">
						X
					</button>
				</div>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<div className="row">
						<div className="col-sm-4 col-md-4 col-lg-4">
							<p>Min</p>
							<p>{min}°</p>
						</div>
						<div className="col-sm-4 col-md-4 col-lg-4">
							<p>Max</p>
							<p>{max}°</p>
						</div>
						<div className="col-sm-4 col-md-4 col-lg-4">
							<img
								className="iconoClima"
								src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
								alt=""
							/>
						</div>
						<Link to={`/ciudad/${id}`} style={{ textDecoration: "none", color: "white" }}>
							<button className="botonMore">More...</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
