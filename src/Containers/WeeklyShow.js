import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

class WeeklyShow extends Component {
	getPic = num => {
		let urlpic;
		if (num < 10) {
			urlpic = `https://developer.accuweather.com/sites/default/files/0${num}-s.png`;
		} else {
			urlpic = `https://developer.accuweather.com/sites/default/files/${num}-s.png`;
		}
		return urlpic;
	};
	fixTime = time => {
		let res = time.slice(0, 19); //Fri Dec 20 2019 02:00
		let d = new Date(res);
		let timeRes = String(d).slice(0, 21);
		let timeArry = timeRes.split(' ');

		return (
			<div>
				<p>{timeArry[0]}</p>
				<p>
					{timeArry[2]} {timeArry[1]}
				</p>
			</div>
		);
	};

	fixToCelsius = d => {
		let res = (d - 32) / 1.8;
		let shortNum = res.toString().slice(0, 2);
		return <span>{`${shortNum}° C`}</span>;
	};

	fifToFarenheit = d => {
		return <span>{`${d}° F`}</span>;
	};

	render() {
		let weeks = this.props.res_5.map((item, index) => {
			return (
				<Col xs="12" md="2" key={index}>
					<Alert className="mycard" color="light">
						<div>{this.fixTime(item.Date)}</div>
						<p>
							<img alt="pic WeatherIcon" src={this.getPic(item.Day.Icon)} />
						</p>
						<p>
							{ this.fixToCelsius(item.Temperature.Maximum.Value) } / {this.fixToCelsius(item.Temperature.Minimum.Value) }
						</p>
						<p>{item.Day.IconPhrase}</p>
					</Alert><br/>
				</Col>
			);
		});

		return (
			<div className="WeeklyShow-page">
				<Row><Col></Col> {weeks}<Col></Col></Row>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		res_5: state.weatherReducer.res_5,
	};
};
const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyShow);

