class Sock < ActiveRecord::Base
  validates :size, presence: true
  validates :color, presence: true
end
