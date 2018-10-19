Boat.destroy_all
Booking.destroy_all
User.destroy_all
Review.destroy_all

user1 = User.create(name: 'Brett K.', email: 'brett@email', password: 'password')
propic1 = File.open('https://s3-us-west-1.amazonaws.com/sailbnb-dev/pro-pic-m2.png')
user1.photo.attach(io: propic1, filename: 'pro-pic-m2.png')

user2 = User.create(name: 'Jerry M.', email: 'jerry@email', password: 'password')
propic2 = File.open('https://s3-us-west-1.amazonaws.com/sailbnb-dev/pro-pic-m1.png')
user2.photo.attach(io: propic2, filename: 'pro-pic-m1.png')

user3 = User.create(name: 'Michelle F.', email: 'michelle@email', password: 'password')
propic3 = File.open('https://s3-us-west-1.amazonaws.com/sailbnb-dev/pro-pic-f1.png')
user3.photo.attach(io: propic3, filename: 'pro-pic-f1.png')

user4 = User.create(name: 'Alexa', email: 'guest@email', password: 'password')
propic4 = File.open('https://s3-us-west-1.amazonaws.com/sailbnb-dev/pro-pic-f2.png')
user4.photo.attach(io: propic4, filename: 'pro-pic-f2.png')

boat1= Boat.create(owner_id: user1.id, title:'45ft Island Schooner', location: 'Kalapana, Hawaii', description: 'Let the waves rock you to bed on this island schooner!!', rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 19.326423, lng: -155.020683)
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


boat2 = Boat.create(owner_id: user2.id, title:'65ft Fully Outfitted Pirate Ship!', location: 'Princeton, CA', description: "You'll never be bored on this floating party pirate boat. Four decks of fun await!!", rate: 250, guests: 10, bedrooms: 4, beds: 6, baths: 2, lat: 37.500052, lng: -122.488629)
pic6 = File.open('app/assets/images/bay-boat-daylight.jpg')
boat2.photos.attach(io: pic6, filename: 'bay-boat-daylight.jpg')

boat3 = Boat.create(owner_id: user1.id, title:'37ft Canal Houseboat', location: 'Seattle, WA', description: "Never be far from the fun! Fully furnished, and easy on/off dock access!", rate: 120, guests: 4, bedrooms: 1, beds: 22, baths: 1, lat: 47.628148, lng: -122.333208)
pic7 = File.open('app/assets/images/houseboat1.jpg')
boat3.photos.attach(io: pic7, filename: 'houseboat1.jpg')

boat4 = Boat.create(owner_id: user3.id, title:'50ft Ghost Pirate Ship', location: 'Bonita Cove, CA', description: "Ahoy mateys!! Forget the boring hotel, come fullfill a fantasy on my rustic pirate ship!", rate: 160, guests: 7, bedrooms: 4, beds: 6, baths: 0, lat: 37.825010, lng: -122.522428)
pic8 = File.open('app/assets/images/pirateShip.jpg')
boat4.photos.attach(io: pic8, filename:'pirateShip.jpg')

boat5 = Boat.create(owner_id: user1.id, title:'800sqft Houseboat', location: 'San Francisco, CA', description: 'Docked right near downtown, with plenty of kayacks for your enjoyment!', rate: 150, guests: 3, bedrooms: 1, beds: 2, baths: 1, lat: 37.806438, lng: -122.442744)
pic9 = File.open('app/assets/images/houseboat2.jpg')
boat5.photos.attach(io: pic9, filename: 'houseboat2.jpg')

boat6 =Boat.create(owner_id: user2.id, title:'65ft Tri-Mast Yacht', location: 'Princeton, CA', description: 'Create memories on this replica of an 18th century schooner!!', rate: 250, guests: 6, bedrooms: 3, beds: 3, baths: 1, lat: 40.500052, lng: -123.488629)
pic10 = File.open('app/assets/images/tri-mast-at-dusk.jpg')
boat6.photos.attach(io: pic10, filename: 'tri-mast-at-dusk.jpg')

boat7 =Boat.create(owner_id: user1.id, title:'40ft Comfortable Moored Sailboat', location: 'San Francisco, CA', description: "Nestled off Hunter's point. There is a shuttle servie from Hunter's Point Shipyard.", rate: 150, guests: 3, bedrooms: 1, beds: 1, baths: 1, lat: 37.722527, lng: -122.378293)
pic11 = File.open('app/assets/images/birdseye-view-boat.jpg')
boat7.photos.attach(io: pic11, filename: 'birdseye-view-boat')


booking1 = Booking.create(boat_id: boat1.id, user_id: user1.id, guests: 1, checkin: '01/01/2019', checkout: '05/01/2019')
booking2 = Booking.create(boat_id: boat1.id, user_id: user1.id, guests: 2, checkin: '01/02/2019', checkout: '05/02/2019')
booking3 = Booking.create(boat_id: boat1.id, user_id: user2.id, guests: 3, checkin: '01/03/2019', checkout: '05/03/2019')
booking4 = Booking.create(boat_id: boat2.id, user_id: user2.id, guests: 4, checkin: '20/12/2018', checkout: '03/01/2019')
booking5 = Booking.create(boat_id: boat2.id, user_id: user1.id, guests: 5, checkin: '01/02/2019', checkout: '05/02/2019')


Review.create(booking_id: booking1.id, author_name: "Brett", overall: 4.5, description: "We had the best time staying on Tim's boat for a few nights. He was always around to ferry us to land or back when we needed!", date: "June 2017")
Review.create(booking_id: booking2.id, author_name: "Brett", overall: 2.5, description: "Listening to the waves lap up against the boat at night under the stars was the most relaxing experience. I would highly recommend!", date: "August 2018")
Review.create(booking_id: booking3.id, overall: 3.5, author_name: "Nick", description: "The boat is beautful, but we found the space to be too cramped. Definitely wouldn't suggest staying here more than two nights.", date: "April 2018")
Review.create(booking_id: booking4.id, overall: 4.5, author_name: "Nick", description: 'Loved staying here! Stephanie recommended a great restaurant right on water to eat... and it was only a 10 minute drive into town!', date: "September 2018")
Review.create(booking_id: booking5.id, overall: 5.0, author_name: "Brett", description: "Worst experience ever. The PUMP toilet stopped worked and a mechanic could't get to it until monday. We went and found a hotel instead... ughh", date: "September 2018")
