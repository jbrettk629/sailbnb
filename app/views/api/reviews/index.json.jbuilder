@reviews.each do |review|
  json.set! review.id do
    json.extract! review,  :id, :user_id, :boat_id, :booking_id, :overall, :accuracy, :communication, :cleanliness, :location, :checkin, :value, :description
  end
end
