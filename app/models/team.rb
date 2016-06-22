class Team < ActiveRecord::Base

  has_many :users
  has_many :resources

  def show_users
    self.users.select(:id,:coach)
  end

  def show_grades
    temp = []
    data = []
    self.users.each do |user|
      temp << user.get_grades
    end
    data << temp
  end

  def show_coach_notifications
    temp = []
    data = []
    self.users.each do |user|
      temp << user.get_coach_notifications
    end
    
    data << temp

  end
  
  def show_player_notifications
    temp = []
    data = []
    self.users.each do |user|
      temp << user.get_player_notifications
    end
    
    data << temp

  end
  
    
end
