class AddCookiesToVisitors < ActiveRecord::Migration
  def change
    add_column :visitors, :cookies, :string
  end
end
