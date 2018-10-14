import React from 'react';


const BoatShow = ({ boatId, boat, fetchBoat}) => {


debugger
  return (

    <div className="boat-show-page">
      <div className="boat-show-images">
        <p>Boat Show Pictures</p>
      </div>
      <div className="boat-show-info">
        <p>Boat title</p>
        <p>Boat Description</p>
        <p>Boat Show Reviews</p>
      </div>
      <div className="boat-booking">
        <p>Boat Booking</p>
      </div>
    </div>
  )
}

export default BoatShow
