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
          <div id="review-rating" >Your Overall Rating: {this.props.booking.review.overall}</div>
          <div id="review-des" >{this.props.booking.review.description}</div>
          <div className="button-div">
            <button className="edit-review-button" onClick={() => this.props.openModal('review', data)}>Edit Review</button>
          </div>
        </div>
      );

    const data = {review: this.props.booking.review, boatId: this.props.booking.boat_id}
    const reviewForm = () => (
      <div className="booking-review-info">
        <button className="review-button" onClick={() => this.props.openModal('review', data)}>Create a Review</button>
      </div>
    );

    const reviewChoice = () => {
      if (this.props.booking.review.description === "add description here"){
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
