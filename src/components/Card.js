import React from 'react';
import { weatherIconsAPI, convertFarenheit } from '../utils.js';


const Card = ({ data, system, units }) => {

	let appDate = data.applicable_date.split("-");
	let date = new Date(appDate[0], appDate[1]-1, appDate[2]);
	let days = {
		0: "Domingo",
		1: "Lunes",
		2: "Martes",
		3: "Miercoles",
		4: "Jueves",
		5: "Viernes",
		6: "Sabado"
	}
	let day = date.getDay();
	let maxTemp = 0;
	let minTemp = 0;

	if(system === 'i') {
		maxTemp = Math.round(convertFarenheit(data.max_temp));
		minTemp = Math.round(convertFarenheit(data.min_temp));
	} else {
		maxTemp = Math.round(data.max_temp);
		minTemp = Math.round(data.min_temp);
	}

	return(
		<div className="card">
			<h3 className="card__title">{days[day]}</h3>
			<div className="card-img">
				<img 
					src={`${weatherIconsAPI}/${data.weather_state_abbr}.svg`} 
					alt="Weather"
				/>
			</div>
			<div className="temp">
				<span className="temp__max">{maxTemp}º{units[0].toUpperCase()}</span>
				<span className="temp__min">{minTemp}º{units[0].toUpperCase()}</span>
			</div>
		</div>
	)
}

export default Card;