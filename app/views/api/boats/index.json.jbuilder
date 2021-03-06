@boats.each do |boat|
  json.set! boat.id do
    json.extract! boat, :id, :owner_id, :title, :location, :description, :rate, :guests, :bedrooms, :beds, :baths, :lat, :lng
    if boat.photos.attached?
      json.photoUrls boat.photos.map { |file| url_for(file)}
    end 
  end
end
