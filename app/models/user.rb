class User < ActiveRecord::Base

  belongs_to :team
  has_many :grades

  def full_name
    "#{first_name} #{last_name}"
  end


end
