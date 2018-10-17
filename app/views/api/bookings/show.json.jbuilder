json.booking do
  json.extract! @booking, :id, :boat_id, :user_id, :guests, :checkin, :checkout
end

json.review do
  @booking.reviews do |review|
    json.set! review.id do
      json.extract! review, :id, :booking_id, :overall, :description
    end
  end
end

json.boat do
  @booking.boat do |boat|
    json.set! boat.id do
      json.extract! boat, :id, :owner_id, :title, :location
      json.photoUrls boat.photos.map{ |file| url_for(file)}
    end
  end
end 
