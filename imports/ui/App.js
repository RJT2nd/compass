import React, { Component } from 'react';

var compassMeasure;


// App component - represents the whole app
export default class App extends Component {

  renderLocation() {
    navigator.geolocation.getCurrentPosition(
      function(position) { // OnSuccess
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
      },
      function(error) { // OnError
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Compass</h1>
        </header>

        <ul>
          { this.renderLocation() }
        </ul>
        
      </div>
    );
  }



  // onSuccess(heading) {
  //   heading = "Heading: " + heading.magneticHeading;
  // }

  // onError(compassError) {
  //   heading = "Failed on Error";
  // }

  // renderCompassHeading() {
  //   document.addEventListener("deviceready", onDeviceReady, false);
  //   function onDeviceReady() {
  //       console.log(navigator.compass);
  //   }
    
  //   navigator.compass.watchHeading(
  //     function(heading) {
  //       compassMeasure = "Heading: " + heading.magneticHeading;
  //     },
  //     function(compassError) {
  //       alert('Compass error: ' + compassError.code);
  //       compassMeasure = "Failed on Error";
  //     },
  //     {
  //       frequency: 3000,
  //     }
  //   );
  //   return (
  //     <div>{ compassMeasure }</div>
  //   );
  // }
}