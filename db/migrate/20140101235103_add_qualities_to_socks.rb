class AddQualitiesToSocks < ActiveRecord::Migration
  def change
    add_column :socks, :size, :string
    add_column :socks, :color, :string
    add_column :socks, :distinguishing_markings, :string
  end
end
