
export const fetchBookings = (boat_id) => {
  return $.ajax ({
    method: 'GET',
    url: `api/boats/${boat_id}`
  });
};

export const createBooking = (booking) => {
  return $.ajax ({
    method: 'POST'
  })
}
