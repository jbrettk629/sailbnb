import { connect } from 'react-redux';
import TripsIndex from './trips_index';
import { fetchUsersBookings } from '../../actions/booking_actions';
import { fetchReview, fetchReviews, createReview } from '../../actions/reviews_actions';
import { fetchBoat } from '../../actions/boat_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
  bookings: Object.values(state.entities.bookings)
})

const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchUsersBookings: () => dispatch(fetchUsersBookings()),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TripsIndex);
