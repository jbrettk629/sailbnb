import * as BookingsApiUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
})

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const fetchBookings = (boat_id) => dispatch => {
  return (
    BookingsApiUtil.fetchBookings(boat_id)
      .then( bookings => dispatch(receiveBookings(bookings)))
  );
};

export const fetchBooking = (boat_id, booking_id) => dispatch => {
  // debugger
  return (
    BookingsApiUtil.fetchBooking(boat_id, booking_id)
      .then( booking => dispatch(receiveBooking(booking)))
  );
};

export const createBooking = (booking) => dispatch => {
  return (
    BookingsApiUtil.createBooking(booking).then(
      booking => dispatch(receiveBooking(booking)),
      err => {
        debugger
        dispatch(receiveErrors(err.responseJSON)) }
    )
  );
};
