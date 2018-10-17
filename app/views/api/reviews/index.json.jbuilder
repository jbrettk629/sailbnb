@reviews.each do |review|
  json.set! review.id do
    json.extract! review,  :id, :booking_id, :author_name, :overall, :accuracy, :communication, :cleanliness, :location, :checkin, :value, :description
  end
end
