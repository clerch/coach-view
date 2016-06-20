class TeamController < ApplicationController


######## move to events_controller eventually
  def events
    @team = Team.find(1) #params[:id] - hard coded
    @coach = @team.users.where(coach: true)[0]
    team_events = []

    events_list = fetch_all_events(@coach)
    events_list.items.each do |event|
      temp = {
        start: event.start.date_time,
        finish: event.end.date_time
      }
      team_events << temp
    end

    data = {
        name: @coach.first_name,
        id: @coach.id,
        events: team_events
    }

    puts data

    render :json => data

  end

  def create_event
    @team = Team.find(1) #params[:id] - hard coded
    @coach = @team.users.where(coach: true)[0]

    service = get_service(@coach)

    service.insert_event(
      @coach.calendar_id, 
      event_object = nil, 
      max_attendees: nil, 
      send_notifications: nil, 
      supports_attachments: nil, 
      ields: nil, 
      quota_user: nil, 
      user_ip: nil, 
      options: nil, 
      &block
    )

  end

  def fetch_all_events(coach)

    service = get_service(coach)

    events_list = service.list_events(
      coach.calendar_id,
      max_results: nil, 
      single_events: nil, 
      time_max: nil, 
      time_min: nil, 
      time_zone: nil, 
      options: nil
    )

    events_list

  end

skip_before_filter :verify_authenticity_token


  def get_service(coach)
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
        # :access_token => coach.access_token,
        :refresh_token => coach.refresh_token
      )

    # auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new
    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client
    return service
  end

  ############## end of move to events_controller eventually

  def show
    @team = Team.find(1) #params[:id] - hard coded
    @users = @team.show_users

    render :json => @users

  end

end
