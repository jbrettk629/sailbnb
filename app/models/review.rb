class Review < ApplicationRecord

  validates :user_id, :boat_id, :booking_id, :overall, :description, presence:true
  validates :booking_id, uniqueness:true

  belongs_to :user
  belongs_to :boat
  belongs_to :booking

end
