class User < ActiveRecord::Base

  belongs_to :team
  has_many :grades
  has_many :notifications

  def full_name
    "#{first_name} #{last_name}"
  end


  def get_grades
    self.grades
  end

  def get_coach_notifications
    self.notifications.where("content = ?", "grade")
  end

  def get_player_notifications
    self.notifications.where("content = ?", "resource")
  end


  def get_user_schedule

    data = {
      name: self.full_name,
      id: self.id,
      events: []
    }
    calendar = self.calendar_id
    events_list = self.fetch_events_list

    events_list.items.each do |event|
      temp = {
        id: event.id,
        start: event.start.date_time,
        end: event.end.date_time
      }
      data[:events] << temp
    end
      return data
  end


  def fetch_events_list
    client_opts = {"web"=>{
      "token_credential_uri"=>"https://accounts.google.com/o/oauth2/token", 
      "client_id"=>ENV['GOOGLE_API_CLIENT_ID'], 
      "client_secret"=>ENV['GOOGLE_API_CLIENT_SECRET'], 
      "scope"=>["https://www.googleapis.com/auth/calendar"]
      }
    }
      

      client_secrets = Google::APIClient::ClientSecrets.new(client_opts)

      # Build an authorization object from the client secrets.
      # authorization is a Client object
      auth_client = client_secrets.to_authorization
      auth_client.update_token!(
        # :access_token => self.access_token,
        :refresh_token => self.refresh_token
      )

    # auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new
    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client

    events_list = service.list_events(
      self.calendar_id,
      max_results: nil, 
      single_events: nil, 
      time_max: nil, 
      time_min: nil, 
      time_zone: nil, 
      options: nil
    )

    events_list
  end 






end
