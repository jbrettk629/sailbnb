import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    bookings: state.entities.bookings,
    // boat_id: parseInt(ownProps.match.params.boatId)
  });
};


const mapDispatchToProps = dispatch => {
  return ({
    createBooking: booking => dispatch(createBooking(booking))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
