  @bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :boat_id, :user_id, :guests, :checkin, :checkout
      json.review booking.review
      json.boat_loc booking.boat.location
      json.boat_title booking.boat.title
        json.boat_photos booking.boat.photos.map { |file| url_for(file)}
      end
    end
  end


# json.reviews do
#   @bookings.each do |booking|
#
#     json.set! booking.review.id do
#       json.extract! booking.review, :id, :description, :overall
#     end
#   end
# end
#
# json.boats do
#   @bookings.each do |booking|
#     json.set! booking.boat.id do
#       json.extract! booking.boat :id, :location, :title, :description
#       json.photoUrls booking.boat.photos.map { |file| url_for(file)}
#     end
#   end
# end
