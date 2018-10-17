class UpdateReviewDate < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :date, :string
  end
end
