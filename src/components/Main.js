import React from 'react';
import Slider from './Slider'
import Card from './Card'

 class Main extends React.Component {

 	render() {
 		const { data, system, units, convertFarenheit, convertVelocity, handleTemp } = this.props;
 		let widthHumidity = {
 			width: `${data.consolidated_weather[0].humidity}%`
 		}
 		let wind = Math.round(data.consolidated_weather[0].wind_speed);
 		let visibility = Math.round(data.consolidated_weather[0].visibility);
 		if (system === "m"){
 			wind = Math.round(convertVelocity(data.consolidated_weather[0].wind_speed));
 			visibility = Math.round(convertVelocity(data.consolidated_weather[0].visibility));
 		} else {

 		}
 		return(
 			<section className="main" id="main">
 				<div className="converter">
 					<span className="converter__celsius">Cº</span>
 						<Slider
 							onClick={handleTemp}
 						 />
 					<span className="converter__farenheith">Fº</span>
 				</div>
 				<div className="cards-container">
 					<Card 
 						data={data.consolidated_weather[1]}
 						system={system}
 						units={units}
						convertFarenheit = {convertFarenheit}
 					/>
 					<Card 
 						data={data.consolidated_weather[2]}
 						system={system}
 						units={units}
						convertFarenheit = {convertFarenheit}
 					/>
 					<Card 
 						data={data.consolidated_weather[3]}
 						system={system}
 						units={units}
						convertFarenheit = {convertFarenheit}
 					/>
 					<Card 
 						data={data.consolidated_weather[4]}
 						system={system}
 						units={units}
						convertFarenheit = {convertFarenheit}
 					/>
 					<Card 
 						data={data.consolidated_weather[5]}
 						system={system}
 						units={units}
						convertFarenheit = {convertFarenheit}
 					/>
 				</div>
 				<h2 className="subtitle">Clima Hoy: </h2>
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
 			</section>
 		)
 	}
 }

 export default Main