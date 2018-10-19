@reviews.each do |review|
  json.set! review.id do
    json.extract! review,  :id, :booking_id, :author_name, :overall, :accuracy, :communication, :cleanliness, :location, :checkin, :value, :description
    if review.user.photo.attached?
      json.author_photoUrl url_for(review.user.photo)
    end
  end
end
