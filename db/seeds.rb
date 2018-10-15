# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Boat.create(owner_id: 1, title:'20ft Houseboat', location: 'San Francisco, CA', description: 'beautiful boat!!', rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 37.808302, lng: -122.422182)
Boat.create(owner_id: 2, title:'20ft Houseboat', location: 'Princeton, CA', description: 'beautiful boat!!', rate: 250, guests: 6, bedrooms: 3, beds: 3, baths: 1, lat: 37.500052, lng: -122.488629)
Boat.create(owner_id: 1, title:'20ft Houseboat', location: 'Harbor Point, CA', description: 'beautiful boat!!', rate: 90, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 37.884576, lng: -122.500268)
Boat.create(owner_id: 3, title:'woeboat', location: 'San Francisco, CA', description: 'its crap!!', rate: 10, guests: 3, bedrooms: 0, beds: 0, baths: 0, lat: 37.779562, lng: -122.430257)
Boat.create(owner_id: 1, title:'20ft Motorboat', location: 'San Francisco, CA', description: 'beautiful boat!!', rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 38.808302, lng: -124.422182)
Boat.create(owner_id: 2, title:'28ft Sailboat', location: 'Princeton, CA', description: 'beautiful boat!!', rate: 250, guests: 6, bedrooms: 3, beds: 3, baths: 1, lat: 40.500052, lng: -123.488629)
Boat.create(owner_id: 1, title:'30ft Houseboat', location: 'San Francisco, CA', description: 'beautiful boat!!', rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 24.808302, lng: -122.722182)

User.create(name: 'brett', email: 'brett@email', password: 'password')
User.create(name: 'nicks', email: 'nicks@email', password: 'password')
User.create(name: 'jeff', email: 'jeff@email', password: 'password')
User.create(name: 'guest', email: 'guest@email', password: 'password')

Booking.create(boat_id: 1, user_id: 2, guests: 1, checkin: '01/01/2019', checkout: '05/01/2019')
Booking.create(boat_id: 2, user_id: 2, guests: 1, checkin: '01/01/2019', checkout: '05/01/2019')
Booking.create(boat_id: 1, user_id: 2, guests: 1, checkin: '01/02/2019', checkout: '05/02/2019')
Booking.create(boat_id: 1, user_id: 2, guests: 1, checkin: '12/02/2018', checkout: '03/01/2019')
