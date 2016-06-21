class Team < ActiveRecord::Base

  has_many :users
  has_many :resources


  def show_users

    self.users.select(:id,:coach)

  end
    
end
