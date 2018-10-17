class Review < ApplicationRecord

  validates :booking_id, :overall, :description, presence:true
  validates :booking_id, uniqueness:true

  belongs_to :booking

end
