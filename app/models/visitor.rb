class Visitor < ActiveRecord::Base

  def session_time
  end

  def self.return_visitors
    where('page_visits > 1').count
  end

  def self.single_time_visitor
    where(page_visits: 1).count
  end

  def self.mobile_users
    where(mobile: true).count
  end

  def self.non_mobile_users
    where(mobile: false).count
  end

  def self.total_visitors
    sum(:page_visits)
  end
end
