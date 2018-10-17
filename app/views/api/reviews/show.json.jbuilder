json.review do
  json.extract! @review, :id, :booking_id, :overall, :description
end

json.user do
  @review.user do |user|
    json.extract! user, :id, :name
  end
end





#  :accuracy, :communication, :cleanliness, :location, :checkin, :value,
