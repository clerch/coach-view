class User < ActiveRecord::Base

  belongs_to :team
  has_many :grades


  def getCalendar
    





    return array of events from google

  end


end
