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
    const trips = Object.values(this.props.bookings).map( booking => {
      return (
        <TripsIndexItem
          booking={booking}
          fetchBoat={this.props.fetchBoat}
          fetchReview={this.props.fetchReview} />
      );
    });

    return (
      <div>
        <h1>This is the users booking index page</h1>
        <ul>
          {trips}
        </ul>
      </div>

    );
  }
}


export default TripsIndex;
