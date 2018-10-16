import React from 'react';


const BoatDetail = ({boat}) => {

  return (
    <div className="boat-detail-object">
      <div className="boat-detail-title">
        <h2>{boat.title}</h2>
      </div>
      <div className="boat-detail-location">
        <h3>{boat.location}</h3>
      </div>
      <div className="hook">
        <div id="1">This boat is on people's minds</div>
        <div id="2">It's been views 300+ times in the past week</div>
      </div>

      <div className="boat-detail-amenities">
        <span>{boat.guests} guests {boat.bedrooms} bedrooms {boat.beds} beds {boat.baths} baths</span>
      </div>
      <div className="boat-detail-description">
        <p>{boat.description}</p>
      </div>
    </div>
  )
}

export default BoatDetail;
