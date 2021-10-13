import React from 'react';
import Btn from './Btn'
import Slider from './Slider'
import { weatherIconsAPI, convertFarenheit} from '../utils.js'

const Data = ({ data, system, units, handleTheme, toggleSearch}) => {
	let appDate = data.consolidated_weather[0].applicable_date.split("-");
	let date = new Date(appDate[0], appDate[1]-1, appDate[2]);
	let options = { year: 'numeric', month: 'short', day: 'numeric'}
	let temp = Math.round(data.consolidated_weather[0].the_temp)
	if(system === 'i') {
		temp = Math.round(convertFarenheit(data.consolidated_weather[0].the_temp));
	}

	return(
		<aside className="aside" id="aside">
			<div className="toggleSearch">
				<Btn 
					text="Buscar por ubicación"
					className="search-toggle"
					onClick={toggleSearch}
				/>
			</div>
			<div className="toggleTheme">
				<img 
					className="theme-icon"
					src={`${weatherIconsAPI}/c.svg`} 
					alt="" 
				/>
				<Slider 
					onClick={handleTheme}
				/>
				<img 
					className="theme-icon"
					src={`${weatherIconsAPI}/hc.svg`} 
					alt="" 
				/>
			</div>
			<div className="weather-logo">
				<img 
					src={`${weatherIconsAPI}/${data.consolidated_weather[0].weather_state_abbr}.svg`}
					alt="weather snow logo" 
					className="weather-logo__img" 
				/>
			</div>
			<div className="weather-info">
				<h2 className="weather-info__title">
					{temp} º{units[0].toUpperCase()}
				</h2>
				<p className="weather-info__location">
					{data.parent.title} - {data.title}
				</p>
				<p className="weather-info__date">
					{date.toLocaleDateString("es-AR", options)}
				</p>
				<p className="weather-info__api">Datos obtenidos de la api de <a href="https://www.metaweather.com/api/">MetaWeather</a></p>
			</div>
		</aside>
	)
}

export default Data;