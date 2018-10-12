class Boat < ApplicationRecord

  validates :owner_id, :title, :lat, :lgn, :location, :rate, :guests, :bedrooms, :beds, :baths, presence:true


end
