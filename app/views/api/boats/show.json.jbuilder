json.extract! @boat, :id, :owner_id, :title, :location, :description, :rate, :guests, :bedrooms, :beds, :baths, :lat, :lng
json.photoUrls @boat.photos.map { |file| url_for(file)}
