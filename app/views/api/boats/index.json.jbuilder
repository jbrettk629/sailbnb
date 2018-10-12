@boats.each do |boat|
  json.set! boat.id do
    json.extract! boat, :id, :owner_id, :title, :location, :description, :rate, :guests, :bedrooms, :beds, :baths, :lat, :lgn
  end
end
