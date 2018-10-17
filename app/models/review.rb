class Review < ApplicationRecord

  validates :booking_id, :overall, :description, presence:true
  validates :booking_id, uniqueness:true

  belongs_to :booking

  belongs_to :user,
    through: :booking,
    source: :user_id

  belongs_to :boat,
    through: :booking,
    source: :boat_id

end
