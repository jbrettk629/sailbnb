class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :boat_id, null:false
      t.integer :user_id, null:false
      t.date :checkin, null:false
      t.date :checkout, null:false
      t.timestamps
    end
    add_index :bookings, :boat_id
    add_index :bookings, :user_id
  end
end
