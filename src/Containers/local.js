

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class local extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     // navigator.geolocation.getCurrentPosition(function(position) {
//     //     debugger
//     //     var pos = {
//     //       lat: position.coords.latitude,
//     //       lng: position.coords.longitude
//     //     };
//     // });
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBSLVEiESHko3E6JLTkFrtJAHfRVSEEbSM' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={this.props.center.lat}
//             lng={this.props.center.lng}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default local;