class Boat < ApplicationRecord

  validates :owner_id, :title, :description, :lat, :lng, :location, :rate, :guests, :bedrooms, :beds, :baths, presence:true

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng < ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
