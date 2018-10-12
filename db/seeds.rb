# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Boat.create(owner_id: 1, title:'20ft Houseboat', location: 'San Francisco, CA', description: 'beautiful boat!!', rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 37.808302, lgn: -122.422182)
Boat.create(owner_id: 1, title:'20ft Houseboat', location: 'Princeton, CA', description: 'beautiful boat!!', rate: 250, guests: 6, bedrooms: 3, beds: 3, baths: 1, lat: 37.500052, lgn: -122.488629)
Boat.create(owner_id: 1, title:'20ft Houseboat', location: 'Harbor Point, CA', description: 'beautiful boat!!', rate: 90, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 37.884576, lgn: -122.500268)
