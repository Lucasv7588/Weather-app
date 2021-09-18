import React from 'react';
import Search from './Search';
import { weatherIconsAPI } from '../utils.js';


class Resume extends React.Component {

	render() {
		const { data, handleTheme, system, units, convertFarenheit, handleSearch } = this.props;
		let appDate = data.consolidated_weather[0].applicable_date.split("-");
		let date = new Date(appDate[0], appDate[1]-1, appDate[2]);
		let options = { year: 'numeric', month: 'short', day: 'numeric'}
		let temp = 0;

		if(system === 'i') {
			temp = Math.round(convertFarenheit(data.consolidated_weather[0].the_temp));
		} else {
			temp = Math.round(data.consolidated_weather[0].the_temp)
		}

		return(
			<aside className="aside" id="aside">
				<Search 
					data={data}
					handleTheme={handleTheme}
					handleSearch={handleSearch}
				/>
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
				</div>
			</aside>
		)
	}
}

export default Resume