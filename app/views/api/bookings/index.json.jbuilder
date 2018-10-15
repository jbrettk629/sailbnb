@bookings.each do |booking|
  json.set! boooking.id do
    json.extract! booking, :id, :boat_id, :user_id, :guests, :checkin, :checkout
  end
end
