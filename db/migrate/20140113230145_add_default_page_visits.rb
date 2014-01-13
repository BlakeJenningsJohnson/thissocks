class AddDefaultPageVisits < ActiveRecord::Migration
  def change
    change_column :visitors, :page_visits, :integer, :default => 0
  end
end
