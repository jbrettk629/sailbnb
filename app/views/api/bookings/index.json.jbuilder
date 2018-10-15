@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :boat_id, :user_id, :guests, :checkin, :checkout
  end
end
