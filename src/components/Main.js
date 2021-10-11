import React from 'react';
import Loading from './Loading'
import Converter from './Converter'
import CardsContainer from './CardsContainer'
import Highlights from './Highlights'
import Error from './Error'
import { weatherAPI } from '../utils.js'

 class Main extends React.Component {

 	state = {
		isLoaded: false,
		data: null,
		error: null
	}

 	fetchWeather = (woeid) => {
		this.setState({
			isLoaded: false
		})
		fetch(`${weatherAPI}/location/${woeid}`)
		.then( response => response.json())
		.then(
			(data) => {
				this.setState({
					isLoaded: true,
					data
				})
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				})
			})
	}

	componentDidMount() {
		this.fetchWeather(this.props.woeid);
	}

	componentDidUpdate(prevProps) {
		if(this.props.woeid !== prevProps.woeid) {
			this.fetchWeather(this.props.woeid);
		}
	}

 	render() {
 		const { system, units, handleTemp } = this.props;
 		const { isLoaded, data, error} = this.state;
 		if(error){
			return(
				<Error 
					error={error.message}
				/>
			)
		}
 		if (!isLoaded) {
	 		return(
 				<Loading />
 			)
 		}
 		return(
 			<section className="main" id="main">
 				<Converter 
 					handleTemp={handleTemp}
 				/>
 				<CardsContainer 
 					data={data}
 					system={system}
 					units={units}
 				/>
 				<h2 className="subtitle">Clima Hoy: </h2>
 				<Highlights 
 					data={data}
 					units={units}
 					system={system}
 				/>
 			</section>
 		)
 		
 	}
 }

 export default Main