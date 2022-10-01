import React, { useState } from "react";
import "../Styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
	const [city, setCity] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSearch(city);
				setCity("");
			}}
		>
			<input
				className="inputText"
				type="text"
				placeholder="Ciudad..."
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<input type="submit" value="Agregar" />
		</form>
	);
}
