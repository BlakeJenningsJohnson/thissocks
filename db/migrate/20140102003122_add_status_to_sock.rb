class AddStatusToSock < ActiveRecord::Migration
  def change
    add_column :socks, :status, :string
  end
end
