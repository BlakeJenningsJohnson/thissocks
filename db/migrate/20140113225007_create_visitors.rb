class CreateVisitors < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.string :ip_address
      t.integer :page_visits
      t.datetime :last_visit
      t.boolean :mobile
      t.string :http_user_agent
      t.integer :socks_found
      t.integer :socks_lost
      t.integer :session_time

      t.timestamps
    end
  end
end
