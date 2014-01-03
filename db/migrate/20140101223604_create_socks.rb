class CreateSocks < ActiveRecord::Migration
  def change
    create_table :socks do |t|

      t.timestamps
    end
  end
end
