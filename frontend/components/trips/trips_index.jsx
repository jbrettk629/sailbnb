import React from 'react';
import { fetchUsersBookings } from '../../actions/booking_actions';
import { fetchReview, fetchReviews, createReview } from '../../actions/reviews_actions';
import TripsIndexItem from './trip_index_item';

class TripsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsersBookings()
  }

  render(){
    const trips = this.props.bookings.map( booking => {
      return (
        <TripsIndexItem
          key={booking.id}
          booking={booking}
          createReview={this.props.createReview} />
      );
    });

    return (
      <div className="trips-index">
        <h1>Your Past Trips</h1>
        <div className="trips">
          {trips}
        </div>
      </div>
    );
  }
}

export default TripsIndex;
