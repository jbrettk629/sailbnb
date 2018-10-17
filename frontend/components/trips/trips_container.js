import { connect } from 'react-redux';
import TripsIndex from './trips_index';
import { fetchUsersBookings } from '../../actions/booking_actions';
import { fetchReview, fetchReviews, createReview } from '../../actions/reviews_actions';
import { fetchBoat } from '../../actions/boat_actions';


const mapStateToProps = state => ({
  bookings: state.entities.bookings,
  reviews: state.entities.reviews,
  boats: state.entities.boats
})

const mapDispatchToProps = dispatch => ({
  fetchUsersBookings: () => dispatch(fetchUsersBookings()),
  fetchRevies: (boatId) => dispatch(fetchReviews(boatId)),
  fetchReview: (boatId, reviewId) => dispatch(fetchReview(boatId, reviewId)),
  fetchBoat: (boatId) => dispatch(fetchBoat(boatId)),
  createReview: (review) => dispatch(createReview(review)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TripsIndex);
