class CreateBoats < ActiveRecord::Migration[5.2]
  def change
    create_table :boats do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false, :limit => 60
      t.string :location, null: false
      t.float :lat, null: false
      t.float :lgn, null:false
      t.text :description, null: false
      t.integer :rate, null: false
      t.integer :guests, null:false
      t.integer :bedrooms, null:false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.timestamps
    end
    add_index :boats, :owner_id
  end
end
