import React from 'react';
import { convertVelocity } from '../utils.js'

const Highlights = ({data, units, system}) => {

	let widthHumidity = {
		width: `${data.consolidated_weather[0].humidity}%`
	}
	let wind = Math.round(data.consolidated_weather[0].wind_speed);
	let visibility = Math.round(data.consolidated_weather[0].visibility);
	if (system === "m"){
		wind = Math.round(convertVelocity(data.consolidated_weather[0].wind_speed));
		visibility = Math.round(convertVelocity(data.consolidated_weather[0].visibility));
	}

	return(
		<div className="highlights">
			<div className="highlights-item">
				<h3 className="highlights-item__title">
					Viento
				</h3>
				<p className="highlights-item__data">
					<span>{wind}</span> {units[1]}
				</p>
				<p className="highlights-item__other">
					Direccion: {data.consolidated_weather[0].wind_direction_compass}
				</p>	
			</div>
			<div className="highlights-item">
				<h3 className="highlights-item__title">
					Humedad
				</h3>
				<p className="highlights-item__data">
					<span>{data.consolidated_weather[0].humidity}%</span>
				</p>
				<div className="humidity-bar">
					<div className="humidity-progress" style={widthHumidity}></div>
				</div>
			</div>
			<div className="highlights-item">
				<h3 className="highlights-item__title">
					Visibilidad
				</h3>
				<p className="highlights-item__data">
					<span>{visibility}</span> {units[1]}
				</p>
			</div>
			<div className="highlights-item">
				<h3 className="highlights-item__title">
					Presión
				</h3>
				<p className="highlights-item__data">
					<span>{data.consolidated_weather[0].air_pressure}</span> mb
				</p>
			</div>
		</div>
	)
}

export default Highlights;