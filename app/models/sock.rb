class Sock < ActiveRecord::Base
  validates :size, presence: true, uniqueness: { case_sensitive: false }
  validates :color, presence: true, numericality: { greater_than: 0 }
end
