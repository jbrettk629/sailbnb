
export const fetchBookings = (boat_id) => {
  // debugger
  return $.ajax ({
    method: 'GET',
    url: `api/boats/${boat_id}/bookings`
  });
};

export const fetchBooking = (boat_id, booking_id) => {
  // debugger
  return $.ajax ({
    method: 'GET',
    url: `api/boats/${boat_id}/bookings/${booking_id}`
  });
};

export const createBooking = (booking) => {
  // debugger
  return $.ajax ({
    method: 'POST',
    url: `api/boats/${booking.boat_id}/bookings`,
    data: { booking }
  });
};
