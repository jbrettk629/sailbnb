class UpdateReviewsindex < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :booking_id, unique:true
  end
end
