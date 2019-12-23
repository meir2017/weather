import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Favorites extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkedA: true,
			WeatherItems: [],
		};
	}

	componentDidMount() {
		let getWeatherApp = JSON.parse(localStorage.getItem('WeatherApp'));
		if (getWeatherApp != null) {
			this.setState({
				WeatherItems: getWeatherApp,
			});
		}
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
    ShowDegrees = d => {
        if(this.props.Degrees){
            let res = (d - 32) / 1.8;
            let shortNum = res.toString().slice(0, 2);
            return <span>{`${shortNum}° C`}</span>;
        }else
        return <span>{`${d}° F`}</span>;

    };
	render() {
		let items = this.state.WeatherItems;
		let res = items.map((item, index) => {
			return (
				<div  key={index}>
					<Row>
                        <Col xs="3"></Col>

                        <Col  className="cardWeather" xs="6">
                        <Row>
                        <Col xs="3">{item[0]}</Col>
                        <Col xs="3"><img alt="pic WeatherIcon" src={this.getPic(item[2].WeatherIcon)} /></Col>
                        <Col xs="3">{this.ShowDegrees(item[2].Temperature.Value)}</Col>
                        <Col xs="3">{item[2].IconPhrase}</Col>
                        </Row>
                        </Col>

                        <Col xs="3"></Col>
						<br />
					</Row>
				</div>
			);
		});
		return (
			<div>
            My favorites

				{res}
			</div>
		);
	}
}
export default Favorites;

