class Review < ApplicationRecord

  validates :booking_id, :overall, :description, presence:true
  validates :booking_id, uniqueness:true

  belongs_to :booking

  has_one :user,
    through: :booking,
    source: :user_id

  has_one :boat,
    through: :booking,
    source: :boat_id

end
