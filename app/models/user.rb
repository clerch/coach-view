require 'google/apis/calendar_v3'
require 'google/api_client/client_secrets'
require 'json'

class User < ActiveRecord::Base

  belongs_to :team
  has_many :grades  

end
