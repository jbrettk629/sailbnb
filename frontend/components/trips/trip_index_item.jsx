import React from 'react'


class TripsIndexItem extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault
  }

  updateForm(field){

  }


  render(){
    // if conditional then const = review info else const = reviewform
    // put {const} in your return function in your render
    const reviewInfo = () => (
        <div id="booking-review-info">
          <div id="review-rating" >{this.props.booking.review_rat}</div>
          <div id="review-des" >{this.props.booking.review_des}</div>
        </div>
      );

    const reviewForm = () => (
      <div>
        // <button onClick={() => openModal('login')}>Create a Review</button>
      </div>
    );


    return (
      <div className="trip-index-item">
        <div className="booking-pic">
          <img src={this.props.booking.boat_photos[0]} />
        </div>
        <div className="booking-trip-info">
          <div id="booking-dates">{this.props.booking.checkin} - {this.props.booking.checkout}</div>
          <div id="booking-location">{this.props.booking.boat_loc}</div>
          <div id="booking-title">{this.props.booking.boat_title}</div>
        </div>
        {reviewInfo()}
      </div>
    );
  }

}

export default TripsIndexItem;
