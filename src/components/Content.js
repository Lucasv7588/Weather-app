import React from 'react';
import Resume from './Resume';
import Main from './Main';
import Loading from './Loading'
import { weatherAPI } from '../utils.js';

class Content extends React.Component {

	state = {
		isLoaded: false,
		error: null,
		data: [],
		system: 'm', //sistema de unidades: m=sistema internacional (metros/grados centigrados); i: (millas/grados fahrenheith)
		units: ["C", "Km/h"],
		search: ""
	};

	handleTheme = e => {
		if(e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	}

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

	handleSearch = async (e) => {
		e.preventDefault();
		let search = e.target[0].value;
		let woeid = await this.searchLocationByName(search);
		if(woeid !== -1){
			await this.fetchWeather(woeid);
		}
	}

	searchLocationByLattLong = async (latt, long) =>{
		let woeid = 0;
		try{
			let res = await fetch(`${weatherAPI}/location/search/?lattlong=${latt},${long}`);
			let data = await res.json();
			if(data[0]){
				woeid = data[0].woeid
			}else{
				woeid = -1
			}
		} catch(error){
			woeid = -1
		}
		return woeid;
	}

	searchLocationByName = async (name) => {
		let woeid = 0;
		try{
			let res = await fetch(`${weatherAPI}/location/search/?query=${name}`);
			let data = await res.json();
			if(data[0]){
				woeid = data[0].woeid
			}else{
				woeid = -1
			}
		} catch(error){
			woeid = -1
		}
		return woeid;
	}

	fetchWeather = async (woeid) => {
		this.setState({
			isLoaded: false
		})
		try{
			let res = await fetch(`${weatherAPI}/location/${woeid}`);
			let data = await res.json();
			this.setState({
				isLoaded: true,
				data
			})
		}catch(error){
			this.setState({
				isLoaded: true,
				error
			});
		}
	}

	getUserLocation = () => {
		if("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				this.setState({
					isLoaded: false
				})
				let woeid = await this.searchLocationByLattLong(position.coords.latitude, position.coords.longitude);
				await this.fetchWeather(woeid);
			})
		}
	}

	convertFarenheit = temp => ((temp * 9/5) + 32);
	convertVelocity = vel => (vel*1.609);

	async componentDidMount(){
		if("geolocation" in navigator) {
			this.getUserLocation()
		} else {
			this.fetchWeather(468739) //si no se puede obtener la ubicacion, por defecto se busca la de Buenos Aires
		}
	}

	render(){

		const { data, isLoaded, system, units } = this.state;

		if(isLoaded){
			return(
				<div className="content">
					<Resume 
						data={data}
						handleTheme={this.handleTheme}
						system={system}
						units={units}
						convertFarenheit = {this.convertFarenheit}
						handleSearch={this.handleSearch}
					/>
					<Main 
						data={data}
						system={system}
						units={units}
						convertFarenheit = {this.convertFarenheit}
						convertVelocity = {this.convertVelocity}
						handleTemp={this.handleTemp}
					/>
				</div>
			)
		} else {
			return(
				<Loading />
			)
		}
	}
}

export default Content;