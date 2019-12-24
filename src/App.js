import React from 'react';
import './App.css';
import Home from './Containers/Home';
import Background from './imges/pic3.jpg';
var sectionStyle = {
	width: "100%",
	height: "600px",
	backgroundImage: `url(${Background})`
  };
function App() {
	return (
		<div className="App"style={ sectionStyle } >
			<Home />
		</div>
	);
}

export default App;
