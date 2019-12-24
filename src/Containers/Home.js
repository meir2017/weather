import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ShowToday from './ShowToday';
import WeeklyShow from './WeeklyShow';
import Favorites from './Favorites';
import FavorSwitchPageComponentites from '../Components/SwitchPageComponent';
import { SavelocationKeyActions } from '../FilesActions/locationActions';
import { getResFor_5_DayActions } from '../FilesActions/weatherActions';
import { getResDayActions } from '../FilesActions/weatherActions';
import { Container, Button } from 'reactstrap';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Degrees: true,
			FavoritesPage: false,
			resDay: {},
			inputText: '',
			url: 'http://dataservice.accuweather.com/locations/v1/cities/search',
			key: 'luAx3ZTGIAcZVEuRYxEgDyNXotbnAVwG',
		};
	}
	componentDidMount() {
		let pos = null;
		let privThis=this;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				if(pos!=null){
					privThis.handlegGeolocation(pos)
				}
			});
		}
	
	}
	handleChange = event => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
	};

	handlegGeolocation = pos => {
		let urlGFet = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search';
		console.log(`${urlGFet}?apikey=${this.state.key}&q=${pos.lat},${pos.lng}`)   
		axios
			.get(`${urlGFet}?apikey=${this.state.key}&q=${pos.lat},${pos.lng}`) 
			.then(response => {
				let resUniqeu = response.data.Key;
				this.props.SavelocationKey(response.data.LocalizedName, resUniqeu);

				this.handle1hourly(resUniqeu);
				this.handle_5_day(resUniqeu);

			});
	};
	HandleSearch = event => {
		event.preventDefault();
		this.setState({ FavoritesPage: false });
		let urlForUniqeuId = 'http://dataservice.accuweather.com/locations/v1/cities/search';
		axios
			.get(`${urlForUniqeuId}?apikey=${this.state.key}&q=${this.state.inputText}`)
			.then(response => {
				let resUniqeu = response.data[0].Key;
				this.props.SavelocationKey(response.data[0].LocalizedName, resUniqeu);

				this.handle1hourly(resUniqeu);
				this.handle_5_day(resUniqeu);
			})
			.catch(error => {
				if (error.message === "Cannot read property 'Key' of undefined")
					alert(`There is no city named : ${this.state.inputText}  ☺ `);
				    console.log('Error  no name city   fetching and parsing data', error);

			});
	};

	handle1hourly = resUniqeu => {
		let urlFor1hour = 'http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';
		axios
			.get(`${urlFor1hour}${resUniqeu}?apikey=${this.state.key}`) //response.data[0]
			.then(response => {
				this.props.getResDay(response.data[0]);
				this.setState({ resDay: response.data });
			});
	};

	handle_5_day = resUniqeu => {
		let urlFor_5_day = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
		axios
			.get(`${urlFor_5_day}${resUniqeu}?apikey=${this.state.key}`) //response.data.DailyForecasts
			.then(response => {
				this.props.getResFor_5_Day(response.data.DailyForecasts);
			});
	};

	SwitchPage = () => {
		this.setState({ FavoritesPage: !this.state.FavoritesPage });
	};

	FarenheitOrCelsius = () => {
		this.setState({ Degrees: !this.state.Degrees });
	};
	textInfo = () => {
		return (
			<div className="textInfo">
				אתר זה מציג מזג אויר לפי ערים בכול העולם
				<br />
				כדי לצפות בתחזית מזג האויר לפי ערים רצויות <br />
				.יש לחפש את העיר המבוקשת בתיבת החיפוש
				<br />
				<br />
				בנוסף לכך יש אפשרות להוסיף את התוצא במועדפים <br />
				הצפייה במועדפים תהיה בלחציה על הלשונית למעלה
			</div>
		);
	};
	render() {
		return (
			<div className="home-page">
				<nav className="navbar navbar-light bg-light">
					<span className="navbar-brand">WeatherApp</span>
					<FavorSwitchPageComponentites FarenheitOrCelsius={this.FarenheitOrCelsius} />
					{this.state.FavoritesPage ? (
						<Button color="primary" onClick={this.SwitchPage}>
							Home Page
						</Button>
					) : (
						<Button color="primary" onClick={this.SwitchPage}>
							Favorites
						</Button>
					)}
					<form className="form-inline">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							onChange={this.handleChange}
							name="inputText"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							onClick={this.HandleSearch}
							type="button"
						>
							Search
						</button>
					</form>
				</nav>
				<br />

				<Container>
					{this.props.day && !this.state.FavoritesPage && (
						<ShowToday
							Degrees={this.state.Degrees}
							resDay={this.props.res_1_day}
							cityName={this.props.cityName}
						/>
					)}
					<br />
					<br />
					{!this.state.FavoritesPage && <WeeklyShow Degrees={this.state.Degrees} />}
					{this.state.FavoritesPage && <Favorites Degrees={this.state.Degrees} />}
					{!this.props.day && !this.state.FavoritesPage && this.textInfo()}
				</Container>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		cityName: state.locationKeyReducer.cityName,
		citykey: state.locationKeyReducer.citykey,
		res_5: state.weatherReducer.res_5,
		day: state.weatherReducer.day,
		res_1_day: state.weatherReducer.res_1_day,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getResDay(resultForDay) {
			dispatch(getResDayActions(resultForDay));
		},
		SavelocationKey(City, Key) {
			dispatch(SavelocationKeyActions(City, Key));
		},
		getResFor_5_Day(info, info2) {
			dispatch(getResFor_5_DayActions(info, info2));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

///  AIzaSyBSLVEiESHko3E6JLTkFrtJAHfRVSEEbSM
