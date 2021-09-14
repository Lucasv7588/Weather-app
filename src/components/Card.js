import React from 'react';


const Card = () => (
	<div className="card">
		<h3 className="card__title">Sabado</h3>
		<div className="card-img">
			<img 
				src="https://www.metaweather.com/static/img/weather/sn.svg" 
				alt="Weather"
			/>
		</div>
		<div className="temp">
			<span className="temp__min">7º</span>
			<span className="temp__max">13º</span>
		</div>
	</div>
)

export default Card;