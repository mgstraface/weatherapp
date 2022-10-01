import React from "react";
import "../Styles/Ciudad.css";

export default function Ciudad({ city }) {
	// var {ciudadID} = useParams()
	console.log(city);
	return (
		<div className="ciudad">
			<div className="container">
				<div className="info">
					<h1>{city.name}</h1>
					<h3>Temperature: {Math.round(city.temp)} ºC</h3>
					<h3>Weather: {city.weather}</h3>
					<h3>Wind: {city.wind} km/h</h3>
					<h3>Clouds: {city.clouds}</h3>
					<h3>Lat: {city.latitud}º</h3>
					<h3>Lon: {city.longitud}º</h3>
				</div>
				<div className="imagen">
					<img
						className="iconoClimaDetail"
						src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
