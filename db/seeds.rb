Boat.destroy_all
Booking.destroy_all
User.destroy_all

boat1= Boat.create(owner_id: 1, title:'20ft Houseboat', location: 'San Francisco, CA', description: 'beautiful boat!!', rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 37.808302, lng: -122.422182)
pic1 = File.open('app/assets/images/bay-beach-boat.jpg')
boat1.photos.attach(io: pic1, filename: 'bay-beach-boat.jpg')
pic2 = File.open('app/assets/images/inside-50ft.jpeg')
boat1.photos.attach(io: pic2, filename: 'inside-50ft.jpeg')
pic3 = File.open('app/assets/images/fancy-motorboat.jpg')
boat1.photos.attach(io: pic3, filename: 'fancy-motorboat.jpg')
pic4 = File.open('app/assets/images/old-sailboat-sunset.jpeg')
boat1.photos.attach(io: pic4, filename: 'old-sailboat-sunset.jpeg')
pic5 = File.open('app/assets/images/boat-deck-harbor.jpg')
boat1.photos.attach(io: pic5, filename: 'boat-deck-harbor.jpg')


boat2 = Boat.create(owner_id: 2, title:'20ft Houseboat', location: 'Princeton, CA', description: 'beautiful boat!!', rate: 250, guests: 6, bedrooms: 3, beds: 3, baths: 1, lat: 37.500052, lng: -122.488629)
pic6 = File.open('app/assets/images/bay-boat-daylight.jpg')
boat2.photos.attach(io: pic6, filename: 'bay-boat-daylight.jpg')

boat3 = Boat.create(owner_id: 1, title:'20ft Houseboat', location: 'Harbor Point, CA', description: 'beautiful boat!!', rate: 90, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 37.884576, lng: -122.500268)
pic7 = File.open('app/assets/images/houseboat1.jpg')
boat3.photos.attach(io: pic7, filename: 'houseboat1.jpg')

boat4 = Boat.create(owner_id: 3, title:'woeboat', location: 'San Francisco, CA', description: 'its crap!!', rate: 10, guests: 3, bedrooms: 0, beds: 0, baths: 0, lat: 37.779562, lng: -122.430257)
pic8 = File.open('app/assets/images/pirateShip.jpg')
boat4.photos.attach(io: pic8, filename:'pirateShip.jpg')

boat5 = Boat.create(owner_id: 1, title:'20ft Motorboat', location: 'San Francisco, CA', description: 'beautiful boat!!', rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 38.808302, lng: -124.422182)
pic9 = File.open('app/assets/images/houseboat2.jpg')
boat5.photos.attach(io: pic9, filename: 'houseboat2.jpg')

boat6 =Boat.create(owner_id: 2, title:'28ft Sailboat', location: 'Princeton, CA', description: 'beautiful boat!!', rate: 250, guests: 6, bedrooms: 3, beds: 3, baths: 1, lat: 40.500052, lng: -123.488629)
pic10 = File.open('app/assets/images/tri-mast-at-dusk.jpg')
boat6.photos.attach(io: pic10, filename: 'tri-mast-at-dusk.jpg')

boat7 =Boat.create(owner_id: 1, title:'30ft Houseboat', location: 'San Francisco, CA', description: 'beautiful boat!!', rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 24.808302, lng: -122.722182)
pic11 = File.open('app/assets/images/birdseye-view-boat.jpg')
boat7.photos.attach(io: pic11, filename: 'birdseye-view-boat')

User.create(name: 'brett', email: 'brett@email', password: 'password')
User.create(name: 'nick', email: 'nick@email', password: 'password')
User.create(name: 'jeff', email: 'jeff@email', password: 'password')
User.create(name: 'guest', email: 'guest@email', password: 'password')

Booking.create(boat_id: 1, user_id: 1, guests: 1, checkin: '01/01/2019', checkout: '05/01/2019')
Booking.create(boat_id: 1, user_id: 1, guests: 2, checkin: '01/02/2019', checkout: '05/02/2019')
Booking.create(boat_id: 1, user_id: 2, guests: 3, checkin: '01/03/2019', checkout: '05/03/2019')
Booking.create(boat_id: 2, user_id: 2, guests: 4, checkin: '20/12/2018', checkout: '03/01/2019')
Booking.create(boat_id: 2, user_id: 1, guests: 5, checkin: '01/02/2019', checkout: '05/02/2019')


Review.create(booking_id: 1, author_name: "Brett", overall: 1.5, description: 'first booking', date: "June 2017")
Review.create(booking_id: 2, author_name: "Brett", overall: 2.5, description: 'second booking', date: "August 2018")
Review.create(booking_id: 3, overall: 3.5, author_name: "Nick", description: 'third booking', date: "April 2018")
Review.create(booking_id: 4, overall: 4.5, author_name: "Nick", description: 'fourth booking', date: "September 2018")
Review.create(booking_id: 5, overall: 5.0, author_name: "Brett", description: 'fifth booking', date: "September 2018")
