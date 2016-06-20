class User < ActiveRecord::Base

  belongs_to :team
  has_many :grades

  def full_name
    "#{firstname} #{lastname}"
  end


end
