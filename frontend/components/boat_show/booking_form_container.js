import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    bookings: state.entities.bookings,
    errors: state.errors.booking
  });
};


const mapDispatchToProps = dispatch => {
  return ({
    createBooking: booking => dispatch(createBooking(booking))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
