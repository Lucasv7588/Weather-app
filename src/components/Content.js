import React from 'react';
import Resume from './Resume';
import Main from './Main';
import Loading from './Loading'
import Error from './Error'
import { weatherAPI } from '../utils.js';

class Content extends React.Component {

	state = {
		isLoaded: false,
		woeid: 0,
		system: 'm', //sistema de unidades: m=sistema internacional (metros/grados centigrados); i: (millas/grados fahrenheith)
		units: ["C", "Km/h"],
	};

	handleTemp = e => {
		if(e.target.checked) {
			this.setState({
				system: 'i',
				units: ["F", "mph"]
			});
		} else {
			this.setState({
				system: 'm',
				units: ["C", "Km/h"]
			});
		}
	}

	changeWoeid = e => {
		let woeid = e.target.id
		if(woeid !== this.state.woeid){
			this.setState({
				woeid
			})
		}
	}

	getUserLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			fetch(`${weatherAPI}/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`)
			.then( response => response.json())
			.then( 
				(data) => {
				this.setState({
					isLoaded: true,
					woeid: data[0].woeid
				})
				}, 
				(error) => {
					this.setState({
						isLoaded: true,
						error
					})
				})
		}, (e) => {
			this.setState({
				isLoaded: true,
				woeid: 468739 //codigo de Buenos Aires
			})
		})
	}

	componentDidMount(){
		if("geolocation" in navigator) {
			this.getUserLocation()
		} else{
			this.setState({
				isLoaded: true,
				woeid: 468739 //codigo de Buenos Aires
			})
		}
	}

	render(){

		const { woeid, system, units, isLoaded, error } = this.state;

		if(!isLoaded){
			return(
				<Loading />
			)
		}
		if(error){
			return(
				<Error 
					error={error.message}
				/>
			)
		}
		return(
				<div className="content">
					<Resume 
						system={system}
						units={units}
						woeid={woeid}
						changeWoeid={this.changeWoeid}
					/>
					<Main 
						woeid={woeid}
						system={system}
						units={units}
						handleTemp={this.handleTemp}
					/>
				</div>
			)
		
	}
}

export default Content;