json.extract! user, :id, :name
if user.photo.attached?
  json.photoUrl url_for(user.photo)
end
