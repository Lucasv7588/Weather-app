import React from 'react';
import Slider from './Slider'
import Card from './Card'

 class Main extends React.Component {

 	render() {
 		return(
 			<section className="main" id="main">
 				<div className="converter">
 					<span className="converter__celsius">Cº</span><Slider /><span className="converter__farenheith">Fº</span>
 				</div>
 				<div className="cards-container">
 					<Card />
 					<Card />
 					<Card />
 					<Card />
 					<Card />
 				</div>
 				<h2 className="subtitle">Clima Hoy: </h2>
 				<div className="highlights">
 					<div className="highlights-item">
 						<h3 className="highlights-item__title">
 							Viento
 						</h3>
 						<p className="highlights-item__data">
 							<span>7</span> mph
 						</p>
 						<p className="highlights-item__other">
 							Direccion: NE
 						</p>	
 					</div>
 					<div className="highlights-item">
 						<h3 className="highlights-item__title">
 							Humedad
 						</h3>
 						<p className="highlights-item__data">
 							<span>84%</span>
 						</p>
 						<div className="humidity-bar">
 							<div className="humidity-progress"></div>
 						</div>
 					</div>
 					<div className="highlights-item">
 						<h3 className="highlights-item__title">
 							Visibilidad
 						</h3>
 						<p className="highlights-item__data">
 							<span>6,7</span> mph
 						</p>
 					</div>
 					<div className="highlights-item">
 						<h3 className="highlights-item__title">
 							Presión
 						</h3>
 						<p className="highlights-item__data">
 							<span>998</span> mb
 						</p>
 					</div>
 				</div>
 			</section>
 		)
 	}
 }

 export default Main