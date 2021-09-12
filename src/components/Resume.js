import React from 'react';
import Search from './Search'


class Resume extends React.Component {

	render() {
		return(
			<aside className="aside" id="aside">
				<Search />
				<div className="weather-logo">
					<img 
						src="https://www.metaweather.com/static/img/weather/sn.svg" 
						alt="weather snow logo" 
						className="weather-logo__img" 
					/>
				</div>
				<div className="weather-info">
					<h2 className="weather-info__title">
						7º C
					</h2>
					<p className="weather-info__location">
						Tortuguitas - Buenos Aires
					</p>
					<p className="weather-info__date">
						13 sep 2021
					</p>
				</div>
			</aside>
		)
	}
}

export default Resume