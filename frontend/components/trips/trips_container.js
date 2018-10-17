import { connect } from 'react-redux';
import TripsIndex from './trips_index';


const mapStateToProps = state = ({
  bookings: this.state.entities.bookings,
  reviews: this.state.entities.reviews,
  boats: this.state.entities.boats
})

const mapDispatchToProps = dispatch = ({
  fetchRevies: (boatId) => dispatch(fetchReviews(boatId));
  fetchReview: (boatId, reviewId) => dispatch(fetchReview(boatId, reviewId));
  fetchBoat: (boatId) => dispatch(fetchBoat(boatId));
  createReview: (review) => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(TripsIndex);
