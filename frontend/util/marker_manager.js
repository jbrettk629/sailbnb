
export default class MarkerManager {
  constructor(map) {  //will add handleClick as prop
    this.map = map;
    this.markers = {};
//     // this.handleClick = handleClick;
//
  }
//
  updateMarkers(boats) {
    console.log('time to update');
    const boatObj = {};
    boats.forEach(boat => boatObj[boat.id] = boat);

    boats
      .filter(boat => !this.markers[boat.id])
      .forEach(newBoat => this.createMarker(newBoat, this.handleClick)); // will add this.handleClick as input

//     // Object.keys(this.markers)
//     //   .filter(boatId => !boatsObj[boat.id])
//     //   .forEach(boatId => this.removeMarker(this.markers[boatId]));
  }
//
  createMarker(boat){
    const pos = new google.maps.LatLng(boat.lat, boat.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      boatId: boat.id
    });
    // marker.addListener('click', () => this.handleClick(boat));
    // this.markers[marker.boatId] = marker;
  }
//
//   // removeMarker(marker) {
//   //   this.markers[marker.boatId].setMap(null);
//   //   delete this.markers[marker.boatId];
//   // }
}
