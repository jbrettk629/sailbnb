json.boat do
  json.extract! @boat, :id, :owner_id, :title, :location, :description, :rate, :guests, :bedrooms, :beds, :baths, :lat, :lng
  if @boat.photos.attached?
    json.photoUrls @boat.photos.map { |file| url_for(file)}
  end
end
json.reviews do
  @boat.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :author_name, :overall, :description, :date
      json.author review.user.name
    end
  end
end
