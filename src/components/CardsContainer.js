import React from 'react';
import Card from './Card'

const CardsContainer = ({ data, system, units}) => (
	<div className="cards-container">
		<Card 
			data={data.consolidated_weather[1]}
			system={system}
			units={units}
		/>
		<Card 
			data={data.consolidated_weather[2]}
			system={system}
			units={units}
		/>
		<Card 
			data={data.consolidated_weather[3]}
			system={system}
			units={units}
		/>
		<Card 
			data={data.consolidated_weather[4]}
			system={system}
			units={units}
		/>
		<Card 
			data={data.consolidated_weather[5]}
			system={system}
			units={units}
		/>
	</div>
)

export default CardsContainer