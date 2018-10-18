class Booking < ApplicationRecord

  validates :boat_id, :checkin, :checkout, presence:true
  validate :checkin_before_checkout
  validate :no_overlap
  validate :future_date

  belongs_to :user
  belongs_to :boat
  has_one :review

  def logged_in?

  end

  def checkin_before_checkout
    if checkout <= checkin
       errors[:booking] << 'checkout date must be after checkin date!'
       # render json: ["checkout date must be after checkin date"], status: 404
    end
  end

  def future_date
    if checkin <= Date.today
      errors[:booking] << 'checkin date must be at least one day ahead!'
    end
  end

  def overlapping_bookings
    Booking
      .where(boat_id: boat_id)
      .where.not('checkin > :checkout OR checkout < :checkin',
                  checkin: checkin, checkout: checkout)
  end

  def no_overlap
    unless overlapping_bookings.empty?
      # render json: ["Request overlaps with a previous booking"], status: 404
      errors[:booking] << 'there is an overlap with a previously scheduled date!'
    end
  end

end
