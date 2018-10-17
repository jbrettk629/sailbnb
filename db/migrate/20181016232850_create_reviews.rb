class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :boat_id, null: false
      t.float :overall, null: false
      t.float :accuracy
      t.float :communication
      t.float :location
      t.float :checkin
      t.float :cleanliness
      t.float :value
      t.text :review, null: false
    end
    add_index :reviews, :user_id
    add_index :reviews, :boat_id
  end
end
