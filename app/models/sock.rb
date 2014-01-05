class Sock < ActiveRecord::Base
  validates :size, presence: true
  validates :color, presence: true

  def self.search(query)
    if query.present?
      where(
        "LOWER(color) LIKE :query OR 
         LOWER(distinguishing_markings) LIKE :query", 
         query: "%#{query.downcase}%")
    else
      all
    end
  end

  def self.found
    where(status:'Found').order('updated_at DESC')
  end

  def self.lost
    where(status: nil).order('created_at DESC')
  end
end
