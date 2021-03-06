import * as BookingsApiUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';


const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
})

const receiveBooking = payload => ({
  type: RECEIVE_BOOKING,
  payload
})

const receiveErrors = errors => {
  return ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});
}

export const fetchUsersBookings = () => dispatch => {
  return (
    BookingsApiUtil.fetchUsersBookings().then( bookings => dispatch(receiveBookings(bookings)))
  );
}

export const fetchBookings = (boat_id) => dispatch => {
  return (
    BookingsApiUtil.fetchBookings(boat_id)
      .then( bookings => dispatch(receiveBookings(bookings)))
  );
};

export const fetchBooking = (boat_id, booking_id) => dispatch => {
  return (
    BookingsApiUtil.fetchBooking(boat_id, booking_id)
      .then( booking => dispatch(receiveBooking(booking)))
  );
};

export const createBooking = (booking) => dispatch => {
  return (
    BookingsApiUtil.createBooking(booking).then(
      booking => dispatch(receiveBooking(booking)),
      err => {dispatch(receiveErrors(err.responseJSON)) }
    )
  );
};
