
export const fetchBookings = (boat_id) => {
  return $.ajax ({
    method: 'GET',
    url: `api/boats/${boat_id}/bookings`
  });
};

export const fetchBooking = (boat_id, id) => {
  return $.ajax ({
    method: 'GET',
    url: `api/boats/${boat_id}/bookings/${id}`
  });
};

export const createBooking = (booking) => {
  return $.ajax ({
    method: 'POST',
    url: `api/boats/${booking.boat_id}/bookings`,
    data: { booking }
  });
};
