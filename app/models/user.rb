require 'google/apis/calendar_v3'
require 'google/api_client/client_secrets'
require 'json'

class User < ActiveRecord::Base

  belongs_to :team
  has_many :grades

  def create_google_auth
    client_opts = JSON.parse({"authorization_uri"=>"https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=1072088737400-0mufodco7n7utcg21v8mis7s407t5atq.apps.googleusercontent.com&redirect_uri=http://localhost:3000/sessions/create&response_type=code&scope=https://www.googleapis.com/auth/calendar", "token_credential_uri"=>"https://accounts.google.com/o/oauth2/token", "client_id"=>"1072088737400-0mufodco7n7utcg21v8mis7s407t5atq.apps.googleusercontent.com", "client_secret"=>nil, "scope"=>["https://www.googleapis.com/auth/calendar"], "state"=>nil, "code"=>nil, "redirect_uri"=>"http://localhost:3000/sessions/create", "username"=>nil, "password"=>nil, "issuer"=>nil, "audience"=>nil, "person"=>nil, "expiry"=>60, "expires_at"=>1466196261, "signing_key"=>nil, "refresh_token"=>nil, "access_token"=>"ya29.CjAEA9_NeFit-ogvj4xRrte06M7_J7LMxIpzwaP-A4PVkE_uZVdGVtMwAI_6GWXxz1M", "id_token"=>nil, "extension_parameters"=>{}})
    auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new

    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client

    @calendar_list = service.list_calendar_lists
  end

  def get_calendar_list
    
  end


end
