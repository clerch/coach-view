class CalendarsController < ApplicationController



  def show
    @player = User.find(params[:user_id])
    data = {
      name: @player.full_name,
      id: @player.id,
      events: []
    }
    calendar = @player.calendar_id
    events_list = fetch_events_list(@player)

    events_list.items.each do |event|
      temp = {
        start: event.start.date_time,
        end: event.end.date_time
      }
      data[:events] << temp
    end
    render :json => data

  end


def fetch_events_list(player)
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
        # :access_token => player.access_token,
        :refresh_token => player.refresh_token
      )

    # auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new
    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client

    events_list = service.list_events(
      player.calendar_id,
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
