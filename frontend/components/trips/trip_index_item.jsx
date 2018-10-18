import React from 'react'


class TripsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }



  render(){
    // if conditional then const = review info else const = reviewform
    // put {const} in your return function in your render
    const reviewInfo = () => (
        <div className="booking-review-info">
          <div id="review-rating" >Your Overall Rating: {this.props.booking.review_rat}</div>
          <div id="review-des" >{this.props.booking.review_des}</div>
        </div>
      );

    const reviewForm = () => (
      <div>
        <button className="review-button" onClick={() => openModal('review')}>Create a Review</button>
      </div>
    );

    const reviewChoice = () => {
      if (this.props.booking.review_des === "add description here"){
        return reviewForm();
      } else {
        return reviewInfo();
      }
    }


    return (
      <div className="trip-index-item">
        <div className="booking-pic">
          <img src={this.props.booking.boat_photos[0]} />
        </div>
        <div className="booking-trip-info">
          <div id="booking-title">{this.props.booking.boat_title}</div>
          <div id="booking-dates">{this.props.booking.checkin} - {this.props.booking.checkout}</div>
          <div id="booking-location">{this.props.booking.boat_loc}</div>
        </div>
        {reviewChoice()}
      </div>
    );
  }

}

export default TripsIndexItem;
