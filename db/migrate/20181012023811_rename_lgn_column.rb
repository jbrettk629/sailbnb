class RenameLgnColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :boats, :lgn, :lng
  end
end
