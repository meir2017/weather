import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Row, Col } from 'reactstrap';
import Icon from '@material-ui/core/Icon';

class ShowToday extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	getPic = num => {
		let urlpic;
		if (num < 10) {
			urlpic = `https://developer.accuweather.com/sites/default/files/0${num}-s.png`;
		} else {
			urlpic = `https://developer.accuweather.com/sites/default/files/${num}-s.png`;
		}
		return urlpic;
	};
	handleChange = event => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
	};

	fixTime = time => {
		let res = time.slice(0, 19); //Fri Dec 20 2019 02:00
		let d = new Date(res);
		let timeRes = String(d).slice(0, 21);
		let timeArry = timeRes.split(' ');
		return (
			<div>
				<p>{timeArry[4]}</p>
				<p>{timeArry[0]}</p>
				<p>
					{timeArry[2]} {timeArry[1]}{' '}
				</p>
			</div>
		);
	};
	
	ShowDegrees = d => {
        if(this.props.Degrees){
            let res = (d - 32) / 1.8;
            let shortNum = res.toString().slice(0, 2);
            return <span>{`${shortNum}° C`}</span>;
        }else
        return <span>{`${d}° F`}</span>;

    };
	addTOStorg = () => {
		let WeatherItems = [];
		let item = [this.props.cityName, this.props.citykey, this.props.resDay, this.props.res_5];
		let getWeatherApp = JSON.parse(localStorage.getItem('WeatherApp'));

		 if (getWeatherApp == null) {     //אין נתונים
		 	WeatherItems.push(item);
		 	localStorage.setItem('WeatherApp', JSON.stringify(WeatherItems));
		 } else {	                       // יש נתונים
			 getWeatherApp.push(item);
			 localStorage.setItem('WeatherApp', JSON.stringify(getWeatherApp));
			 
		 }
		 this.setState({})
	};
	creatBtnAddFunc=()=>{

	let existingFlag = true;
	let getWeatherApp = JSON.parse(localStorage.getItem('WeatherApp'));
	if (getWeatherApp == null) {
		return (<Icon onClick={this.addTOStorg} className="btnAdd" >add_circle</Icon>)
	} else{
		for (let i = 0; i < getWeatherApp.length; i++) {
			if (getWeatherApp[i][0] === this.props.cityName) {
				existingFlag = false;
				return 	<span><i  id="like" className="fas fa-heart"></i>
				</span>;
			}
		}
		if (existingFlag) {
			return (<Icon onClick={this.addTOStorg} className="btnAdd" >add_circle</Icon>)

		}
	}
}
	render() {
        let creatBtnAdd=this.creatBtnAddFunc();
		return (
			<div className="ShowToday-page">
				<Row>
					<Col  md ="2" xs="0"></Col>
					<Col  md ="8" xs="12"  className="dayInfo">
						<p>{this.props.cityName}</p>

						<Row>
							<Col xs="3" className="time">
								{this.fixTime(this.props.resDay.DateTime)}
							</Col>
							<Col xs="6" className="iconPic">
								<p>
									<img alt="pic WeatherIcon" src={this.getPic(this.props.resDay.WeatherIcon)} className="imgDay"></img>
								</p>
							</Col>
							<Col xs="3" className="temp+text">
								<p> {this.ShowDegrees(this.props.resDay.Temperature.Value)} </p>
								<p>{this.props.resDay.IconPhrase}</p>

								{creatBtnAdd}
								
							</Col>
						</Row>
					</Col>
					<Col  md ="2" xs="0"></Col>
				
				</Row>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		cityName: state.locationKeyReducer.cityName,
		citykey: state.locationKeyReducer.citykey,
		resDay: state.weatherReducer.res_1_day,
		res_5: state.weatherReducer.res_5,
	};
};
const mapDispatchToProps = dispatch => {
	return {

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowToday);
