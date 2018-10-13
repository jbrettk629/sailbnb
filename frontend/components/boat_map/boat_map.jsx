import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
//
//
class BoatMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435},
      zoom: 9
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
//
//     // google.maps.event.addListener(this.map, 'idle', () => {
//     //   const { north, south, east, west } = this.map.getBounds().toJSON();
//     //   const bounds = {
//     //     northEast: { lat: north, lng: east },
//     //     southWest: { lat: south, lng: west }
//     //   };
//     //   this.props.updateBounds('bounds', bounds);
//     // });
    // console.log("old props", this.props);
    this.MarkerManager.updateMarkers(this.props.boats);
  }
//
  componentDidUpdate(){
    // console.log("new props", this.props);
    this.MarkerManager.updateMarkers(this.props.boats);
  }
//
  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>

          <p>Welcome to the Map!</p>
      </div>
    );

  }
}

export default withRouter(BoatMap);
